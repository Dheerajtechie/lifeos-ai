export const metadata = {
  title: 'LifeOS AI',
  description: 'AI powered life operating system'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
