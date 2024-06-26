import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.variable}>
        {children}
      </body>
    </html>
  )
}