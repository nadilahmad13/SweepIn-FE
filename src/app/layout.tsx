'use client'

import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from '@/components/ui/toaster'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
  session: any
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="w-screen min-h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <SessionProvider>{children}</SessionProvider>
        <Toaster />
      </body>
    </html>
  )
}
