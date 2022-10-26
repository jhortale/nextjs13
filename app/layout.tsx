import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>Next.js 13</head>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/movies">Movies</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
