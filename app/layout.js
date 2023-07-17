import './globals.css'
import { Inter } from 'next/font/google'

import { AddressProvider } from '@/context/AddressContext'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Connect Bitcoin Wallet and Generate Ordinal',
  description: 'Generate Your Ordinal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AddressProvider>
          <div id="wallet-connect-modal" />
          <Header />
          {children}
        </AddressProvider>
      </body>
    </html>
  ); 
}
