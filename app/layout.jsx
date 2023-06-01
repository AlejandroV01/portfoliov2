import './global.css'
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Alejandro Vera</title>
        <link rel='icon' href='/AV.ico' />
      </head>
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  )
}
