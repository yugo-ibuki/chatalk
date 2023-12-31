import type { Metadata } from 'next'
import './globals.css'
import Provider from '@/app/provider'
import Header from '@/components/layouts/Header'

export const metadata: Metadata = {
  title: 'chatalk',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
