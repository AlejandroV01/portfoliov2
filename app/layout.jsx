import './global.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  )
}
