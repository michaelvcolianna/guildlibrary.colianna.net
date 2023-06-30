import Link from 'next/link'
import { categoryList } from '@/app/categories'
import NavLink from '@/app/nav-link'

import '@/app/globals.scss'

export default function RootLayout(
  { children }:
  { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <body>
        <Link href="#content">Skip to content</Link>

        <header>
          <NavLink href="/">
            <strong>The Guild Library Appendix</strong>
          </NavLink>

          <nav aria-labelledby="label-categories">
            <div id="label-categories">Categories:</div>

            <ul>
              {categoryList.map((category, idx) => (
                <li key={idx}>
                  <NavLink href={category.href}>{category.name}</NavLink>
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
