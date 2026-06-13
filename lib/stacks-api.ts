import { callReadOnlyFunction, cvToJSON, standardPrincipalCV, uintCV } from '@stacks/transactions';
import { StacksMainnet } from '@stacks/network';
import type { Event } from './types';

const NETWORK = new StacksMainnet({ url: 'https://api.mainnet.hiro.so' });
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'SP1B27X06M4SF2TE46G3VBA7KSR4KBMJCTHM6BES4';
const CONTRACT_NAME = process.env.NEXT_PUBLIC_CONTRACT_NAME || 'partystacker-v2';

// Helper to fetch single event
export async function fetchEventFromChain(id: number): Promise<Event | null> {
  try {
    // 1. Call get-event(id)
    const eventResult = await callReadOnlyFunction({
      network: NETWORK,
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'get-event',
      functionArgs: [uintCV(id)],
      senderAddress: CONTRACT_ADDRESS,
    });
    
    // 2. Call get-all-tiers(id)
    const tiersResult = await callReadOnlyFunction({
      network: NETWORK,
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'get-all-tiers',
      functionArgs: [uintCV(id)],
      senderAddress: CONTRACT_ADDRESS,
    });

    const eventJson = cvToJSON(eventResult);
    const tiersJson = cvToJSON(tiersResult);

    // Check if event exists
    if (eventJson.value === null || eventJson.type === 'none') return null;

    const data = eventJson.value.value; 
    
    const title = data.title.value;
    const metadataUri = data['metadata-uri'].value;
    const organizer = data.organizer.value;
    const soulbound = data.soulbound?.value === true || data.soulbound?.type === 'true';
    
    // Parse Tiers
    // tiersJson.value.value is likely a list of optionals (some/none)
    // Structure depends on how list is returned.
    const tiersList = tiersJson.value.value || []; 
    // Example: [ { type: '(optional ...)', value: { ... } }, ... ]
    
    const parseTier = (tierData: any) => {
        if (!tierData || tierData.type === 'none' || !tierData.value) {
            return { price: 0, available: 0, sold: 0 };
        }
        const val = tierData.value.value || tierData.value;
        return {
            price: Number(val.price.value) / 1_000_000,
            available: Number(val.capacity.value),
            sold: Number(val.sold.value)
        };
    };

    const generalStats = parseTier(tiersList[0]);
    const vipStats = parseTier(tiersList[1]);
    const backstageStats = parseTier(tiersList[2]);

    
    // Fetch IPFS Metadata for description/image
    let description = 'No description';
    let imageUrl = '';
    let location = 'On-Chain';
    let date = Date.now();
    let nftImageUrl = '';

    if (metadataUri && metadataUri.startsWith('ipfs://')) {
        try {
            const gatewayUrl = metadataUri.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/');
            const metaRes = await fetch(gatewayUrl);
            if (metaRes.ok) {
                const meta = await metaRes.json();
                description = meta.description || description;
                imageUrl = meta.imageUrl || imageUrl;
                nftImageUrl = meta.nftImageUrl || imageUrl;
                location = meta.location || location;
                date = meta.date || date;
            }
        } catch (e) {
            console.warn(`Failed to fetch IPFS for event ${id}`, e);
        }
    }

    return {
      id: `chain-${id}`,
      title,
      description,
      location,
      date,
      imageUrl: imageUrl || '/placeholder.svg',
      nftImageUrl: nftImageUrl || '/placeholder.svg',
      tiers: {
        general: generalStats,
        vip: vipStats,
        backstage: backstageStats
      },
      organizerName: 'Organizer',
      organizerAddress: organizer,
      createdAt: Date.now(),
      status: 'upcoming',
      metadataUri,
      onChainId: id,
      soulbound
    };

  } catch (error) {
    console.error(`Error fetching event ${id} from chain:`, error);
    return null;
  }
}

export async function getAllEventsFromChain(): Promise<Event[]> {
  try {
    const events: Event[] = [];
    let i = 1;
    // Cap at 100 to prevent infinite loops, break when fetch returns null
    while (i <= 100) {
      const event = await fetchEventFromChain(i);
      if (!event) break;
      events.push(event);
      i++;
    }
    return events;
  } catch (error) {
    console.error('Error fetching events from chain:', error);
    return [];
  }
}

export async function fetchTicketListing(ticketId: number) {
    try {
        const result = await callReadOnlyFunction({
            network: NETWORK,
            contractAddress: CONTRACT_ADDRESS,
            contractName: CONTRACT_NAME,
            functionName: 'get-ticket-listing', // Wait, I didn't write this function in the contract!
            functionArgs: [uintCV(ticketId)],
            senderAddress: CONTRACT_ADDRESS,
        });
        return cvToJSON(result);
    } catch (e) {
        return null;
    }
}
