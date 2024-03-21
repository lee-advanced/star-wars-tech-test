import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components'

export const metadata: Metadata = {
  title: 'Star Wars Tech Test',
  description: 'Technical test centered around Star Wars data',
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-sw-global-bg flex flex-col h-screen`}
      >
        <header className="shadow-lg min-h-20">
          <Nav
            links={[
              { text: 'home', href: '/' },
              { text: 'films', href: '/films' },
            ]}
          />
        </header>
        <main className="py-8">{children}</main>
      </body>
    </html>
  )
}
