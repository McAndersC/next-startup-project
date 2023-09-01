import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Demo Applikation',
  description: 'Vi bygger en ren template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>
          {children}
        </body>
    </html>
  )
}
