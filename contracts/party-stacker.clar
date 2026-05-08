
;; PartyStacker V2 - Multi-Tier Event Ticketing

;; Define Constants
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-not-authorized (err u101))
(define-constant err-event-not-found (err u404))
(define-constant err-tier-not-found (err u405))
(define-constant err-ticket-sold-out (err u403))
(define-constant err-insufficient-funds (err u402))
(define-constant err-already-checked-in (err u409))
(define-constant err-invalid-tier (err u410))
(define-constant err-not-token-owner (err u411))
(define-constant err-soulbound-ticket (err u412))
(define-constant err-ticket-not-listed (err u413))
(define-constant err-already-listed (err u414))

;; Define NFT: Ticket
(define-non-fungible-token ticket uint)

;; Data Vars
(define-data-var last-event-id uint u0)
(define-data-var last-ticket-id uint u0)

;; Data Maps

;; Store Event General Info
(define-map events 
    { event-id: uint }
    {
        active: bool,
        metadata-uri: (string-ascii 256),
        organizer: principal,
        title: (string-ascii 64),
        soulbound: bool
    }
)

;; Store Tier Details (event-id + tier-index)
;; Tier 0: General, 1: VIP, 2: Backstage
(define-map event-tiers
    { event-id: uint, tier: uint }
    {
        price: uint,        ;; In microSTX
        capacity: uint,
        sold: uint
    }
)

;; Store Ticket Details
(define-map ticket-details
    { ticket-id: uint }
    {
        event-id: uint,
        tier: uint,
        owner: principal,
        checked-in: bool
    }
)
 
;; Marketplace Listings
(define-map ticket-listings
    { ticket-id: uint }
    {
        price: uint,
        seller: principal
    }
)

;; --- Public Functions ---

;; 1. Create a New Event
;; Expects 3 prices and 3 capacities for tiers 0, 1, 2
(define-public (create-event 
    (title (string-ascii 64)) 
    (metadata-uri (string-ascii 256)) 
    (price-g uint) (cap-g uint)
    (price-v uint) (cap-v uint)
    (price-b uint) (cap-b uint)
    (soulbound bool)
)
    (let
        (
            (event-id (+ (var-get last-event-id) u1))
        )
        ;; Create Event Base
        (map-insert events 
            { event-id: event-id }
            {
                active: true,
                metadata-uri: metadata-uri,
                organizer: tx-sender,
                title: title,
                soulbound: soulbound
            }
        )

        ;; Create Tiers
        ;; General (0)
        (map-insert event-tiers { event-id: event-id, tier: u0 }
            { price: price-g, capacity: cap-g, sold: u0 })
        
        ;; VIP (1)
        (map-insert event-tiers { event-id: event-id, tier: u1 }
            { price: price-v, capacity: cap-v, sold: u0 })
            
        ;; Backstage (2)
        (map-insert event-tiers { event-id: event-id, tier: u2 }
            { price: price-b, capacity: cap-b, sold: u0 })

        (var-set last-event-id event-id)
        (ok event-id)
    )
)

;; 2. Buy Ticket (Mint NFT)
(define-public (buy-ticket (event-id uint) (tier uint))
    (let
        (
            (event (unwrap! (map-get? events { event-id: event-id }) err-event-not-found))
            (tier-data (unwrap! (map-get? event-tiers { event-id: event-id, tier: tier }) err-tier-not-found))
            (ticket-id (+ (var-get last-ticket-id) u1))
            (price (get price tier-data))
            (capacity (get capacity tier-data))
            (sold (get sold tier-data))
            (organizer (get organizer event))
        )
        ;; Check availability
        (asserts! (< sold capacity) err-ticket-sold-out)

        ;; Pay Organizer
        (if (> price u0)
            (try! (stx-transfer? price tx-sender organizer))
            true
        )

        ;; Mint NFT Ticket
        (try! (nft-mint? ticket ticket-id tx-sender))

        ;; Update Tier Stats (Increment sold)
        (map-set event-tiers 
            { event-id: event-id, tier: tier }
            (merge tier-data { sold: (+ sold u1) })
        )

        ;; Store Ticket Metadata
        (map-insert ticket-details
            { ticket-id: ticket-id }
            {
                event-id: event-id,
                tier: tier,
                owner: tx-sender,
                checked-in: false
            }
        )

        (var-set last-ticket-id ticket-id)
        (ok ticket-id)
    )
)

;; 3. Airdrop Ticket (Organizer Only)
(define-public (airdrop-ticket (event-id uint) (tier uint) (recipient principal))
    (let
        (
            (event (unwrap! (map-get? events { event-id: event-id }) err-event-not-found))
            (tier-data (unwrap! (map-get? event-tiers { event-id: event-id, tier: tier }) err-tier-not-found))
            (ticket-id (+ (var-get last-ticket-id) u1))
            (capacity (get capacity tier-data))
            (sold (get sold tier-data))
            (organizer (get organizer event))
        )
        (asserts! (is-eq tx-sender organizer) err-owner-only)
        (asserts! (< sold capacity) err-ticket-sold-out)

        ;; Mint NFT Ticket directly to recipient
        (try! (nft-mint? ticket ticket-id recipient))

        ;; Update Tier Stats (Increment sold)
        (map-set event-tiers 
            { event-id: event-id, tier: tier }
            (merge tier-data { sold: (+ sold u1) })
        )

        ;; Store Ticket Metadata
        (map-insert ticket-details
            { ticket-id: ticket-id }
            {
                event-id: event-id,
                tier: tier,
                owner: recipient,
                checked-in: false
            }
        )

        (var-set last-ticket-id ticket-id)
        (ok ticket-id)
    )
)

;; 4. Check-In (Organizer Only)
(define-public (check-in (ticket-id uint))
    (let
        (
            (ticket-data (unwrap! (map-get? ticket-details { ticket-id: ticket-id }) err-event-not-found))
            (event-id (get event-id ticket-data))
            (event (unwrap! (map-get? events { event-id: event-id }) err-event-not-found))
            (organizer (get organizer event))
        )
        (asserts! (is-eq tx-sender organizer) err-owner-only)
        (asserts! (not (get checked-in ticket-data)) err-already-checked-in)

        (map-set ticket-details
            { ticket-id: ticket-id }
            (merge ticket-data { checked-in: true })
        )
        (ok true)
    )
)

;; 4. SIP-009: Transfer
(define-public (transfer (id uint) (sender principal) (recipient principal))
    (let
        (
            (ticket-data (unwrap! (map-get? ticket-details { ticket-id: id }) err-event-not-found))
            (event-id (get event-id ticket-data))
            (event (unwrap! (map-get? events { event-id: event-id }) err-event-not-found))
        )
        (asserts! (is-eq tx-sender sender) err-not-token-owner)
        (asserts! (not (get soulbound event)) err-soulbound-ticket)
        (try! (nft-transfer? ticket id sender recipient))
        (map-set ticket-details
            { ticket-id: id }
            (merge ticket-data { owner: recipient })
        )
        (ok true)
    )
)

;; 5. Burn Ticket
(define-public (burn (id uint))
    (let
        (
            (ticket-data (unwrap! (map-get? ticket-details { ticket-id: id }) err-event-not-found))
            (owner (get owner ticket-data))
        )
        (asserts! (is-eq tx-sender owner) err-not-token-owner)
        (try! (nft-burn? ticket id owner))
        (map-delete ticket-details { ticket-id: id })
        (ok true)
    )
 )
 
 ;; 6. Marketplace: List Ticket
 (define-public (list-ticket (id uint) (price uint))
    (let
        (
            (ticket-data (unwrap! (map-get? ticket-details { ticket-id: id }) err-event-not-found))
        )
        (asserts! (is-eq tx-sender (get owner ticket-data)) err-not-token-owner)
        (asserts! (is-none (map-get? ticket-listings { ticket-id: id })) err-already-listed)
        
        (map-insert ticket-listings 
            { ticket-id: id } 
            { price: price, seller: tx-sender }
        )
        (ok true)
    )
 )
 
 ;; 7. Marketplace: Unlist Ticket
 (define-public (unlist-ticket (id uint))
    (let
        (
            (listing (unwrap! (map-get? ticket-listings { ticket-id: id }) err-ticket-not-listed))
        )
        (asserts! (is-eq tx-sender (get seller listing)) err-not-token-owner)
        (map-delete ticket-listings { ticket-id: id })
        (ok true)
    )
 )
 
 ;; 8. Marketplace: Buy Ticket
 (define-public (buy-listed-ticket (id uint))
    (let
        (
            (listing (unwrap! (map-get? ticket-listings { ticket-id: id }) err-ticket-not-listed))
            (ticket-data (unwrap! (map-get? ticket-details { ticket-id: id }) err-event-not-found))
            (event-id (get event-id ticket-data))
            (event (unwrap! (map-get? events { event-id: event-id }) err-event-not-found))
            (organizer (get organizer event))
            (price (get price listing))
            (seller (get seller listing))
            (royalty (/ (* price u10) u100)) ;; 10% Royalty
            (seller-proceeds (- price royalty))
        )
        ;; Pay Seller
        (try! (stx-transfer? seller-proceeds tx-sender seller))
        ;; Pay Organizer Royalty
        (if (> royalty u0)
            (try! (stx-transfer? royalty tx-sender organizer))
            true
        )
        ;; Transfer NFT
        (try! (nft-transfer? ticket id seller tx-sender))
        ;; Update Ticket Details
        (map-set ticket-details
            { ticket-id: id }
            (merge ticket-data { owner: tx-sender })
        )
        ;; Remove Listing
        (map-delete ticket-listings { ticket-id: id })
        (ok true)
    )
 )
 
 ;; --- Read-Only Functions ---

;; SIP-009: Get last token ID
(define-read-only (get-last-token-id)
    (ok (var-get last-ticket-id))
)

;; SIP-009: Get token URI
(define-read-only (get-token-uri (id uint))
    (ok none)
)

;; SIP-009: Get owner
(define-read-only (get-owner (id uint))
    (ok (nft-get-owner? ticket id))
)

(define-read-only (get-event (event-id uint))
    (map-get? events { event-id: event-id })
)

(define-read-only (get-ticket-listing (id uint))
    (map-get? ticket-listings { ticket-id: id })
)

(define-read-only (get-tier-stats (event-id uint) (tier uint))
    (map-get? event-tiers { event-id: event-id, tier: tier })
)

(define-read-only (get-all-tiers (event-id uint))
    (ok (list 
        (map-get? event-tiers { event-id: event-id, tier: u0 })
        (map-get? event-tiers { event-id: event-id, tier: u1 })
        (map-get? event-tiers { event-id: event-id, tier: u2 })
    ))
)

(define-read-only (get-ticket (ticket-id uint))
    (map-get? ticket-details { ticket-id: ticket-id })
)

(define-read-only (get-last-event-id)
    (ok (var-get last-event-id))
)
