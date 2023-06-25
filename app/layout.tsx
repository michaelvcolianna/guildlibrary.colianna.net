import Link from 'next/link'
import { categoryList } from '@/app/categories'

import './globals.css'

export default function RootLayout(
  { children }:
  { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <body>
        <a href="#content">Skip to content</a>

        <header>
          <Link href="/">
            <strong>The Guild Library Appendix</strong>
          </Link>

          <nav aria-labelledby="label-categories">
            <span id="label-categories">Categories:</span>

            <ul>
              {categoryList.map((category, idx) => (
                <li key={idx}>
                  <Link href={category.href}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
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
