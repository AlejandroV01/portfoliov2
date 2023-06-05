import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './global.css'
const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700'],
})
export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <head>
        <title>Alejandro Vera</title>
        <link rel='icon' href='/AV.ico' />
      </head>
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
