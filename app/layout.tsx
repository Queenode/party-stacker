import React from "react"
import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'

import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'PartyStacker - Blockchain Event Ticketing',
  description: 'Decentralized event ticketing with NFT attendance proofs powered by Stacks',
  generator: 'v0.app',
}

import { Starfield } from "@/components/Starfield"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="talentapp:project_verification" content="5422f34b85d07582534b5e1754ebaa930ea00828493dc46bf25450fcb39b54c3f3da3fe7de757398e4948675b61df07a37564c180f0301eea09b22972dd8d9ba" />
      </head>
      <body className={`${outfit.variable} ${inter.variable} font-outfit antialiased min-h-screen bg-slate-950 text-slate-100 selection:bg-orange-500/30 noise-overlay`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Starfield />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
