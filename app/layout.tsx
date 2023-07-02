import Link from 'next/link'
import { categoryList, makeUrl } from '@/app/categories'
import NavLink from '@/app/nav-link'
import ExternalLink from '@/app/external-link'
import '@/app/globals.scss'

// @return ReactNode
export default function RootLayout(
  { children }:
  { children: React.ReactNode }
) {
  // This is purely an aesthetic choice
  const currentYear = new Date().getFullYear()

  return (
    <html lang="en">
      <body>
        <Link href="#content">Skip to content</Link>

        <header>
          <div className="inner">
            <NavLink href="/">
              <strong>The Guild Library Appendix</strong>
            </NavLink>

            <nav aria-labelledby="label-categories">
              <div id="label-categories">Categories:</div>

              <ul>
                {categoryList.map((category, idx) => (
                  <li key={idx}>
                    <NavLink href={makeUrl(category.slug)}>
                      {category.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main id="content">
          {children}
        </main>

        <footer>
          <div className="inner">
            &copy; 2020-{currentYear} by
            {"\n"}
            <ExternalLink href="https://colianna.net/stories">
              Michael V. Colianna
            </ExternalLink>
          </div>
        </footer>
      </body>
    </html>
  )
}
