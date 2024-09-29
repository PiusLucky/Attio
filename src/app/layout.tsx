import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import './globals.css'


export const metadata: Metadata = {
  title: 'Attio',
  description: 'CRM platform for conversion',
}

const inter = Inter({subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={inter.className} >{children}</body>
    </html>
  )
}
