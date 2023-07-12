import ExternalLink from '@/app/external-link'
import Inner from '@/app/inner'
import Link from 'next/link'
import NavLink from '@/app/nav-link'

import { categoryList, makeUrl } from '@/app/categories'
import { Space_Grotesk } from 'next/font/google'

import '@/app/globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk'
})

// @return ReactNode
export default function RootLayout(
  { children }:
  { children: React.ReactNode }
) {
  // This is purely an aesthetic choice
  const currentYear = new Date().getFullYear()

  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-white text-black font-sans">
        <Link
          href="#content"
          className="items-center bg-white border flex h-12 left-4 px-12 fixed -translate-y-16 focus:translate-y-4 motion-safe:transition-transform"
        >
          Skip to content
        </Link>

        <header className="bg-black text-white p-6">
          <Inner>
            <NavLink href="/" classes="text-xl">
              <strong>The Guild Library Appendix</strong>
            </NavLink>

            <nav aria-labelledby="label-categories" className="mt-6">
              <div className="sr-only" id="label-categories">Categories:</div>

              <ul className="flex flex-wrap gap-6">
                {categoryList.map((category, idx) => (
                  <li key={idx}>
                    <NavLink
                      href={makeUrl(category.slug)}
                      classes="underline"
                    >
                      {category.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </Inner>
        </header>

        <main id="content">
          {children}
        </main>

        <footer className="bg-black text-white p-6">
          <Inner>
            &copy; 2020-{currentYear} by
            {"\n"}
            <ExternalLink href="https://colianna.net/stories">
              Michael V. Colianna
            </ExternalLink>
          </Inner>
        </footer>

        <span dangerouslySetInnerHTML={{ __html: `<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->` }} />
      </body>
    </html>
  )
}
