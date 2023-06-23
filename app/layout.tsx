import './globals.css'

export const metadata = {
  title: 'The Guild Library',
  description: '...',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <a href="#content">Skip to content</a>

        <header>
          <strong>The Guild Library Appendix</strong>

          <p>
            <em>Some descriptive copy will eventually go here. Maybe navigation too?</em>
          </p>
        </header>

        <main id="content">
          {children}
        </main>

        <footer>
          &copy; 2020-{new Date().getFullYear()} by <a href="https://colianna.net/stories">Michael V. Colianna <span>(opens an external site)</span></a>
        </footer>
      </body>
    </html>
  )
}
