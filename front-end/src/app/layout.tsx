import Header from '@/components/layout/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
