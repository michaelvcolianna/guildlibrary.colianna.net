'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

/**
 * Navigation link generator.
 *
 * Improves the Link component to apply the aria-current property to the anchor
 * when the URL is an exact (and, optional, partial) match.
 *
 * @note Why in the world isn't this a built in feature of next/link?
 *
 * @param  string  href
 * @param  boolean  flagPartial
 * @param  string  classes
 * @param  ReactNode  children
 * @return ReactNode
 */
export default function NavLink(
  { href, flagPartial = true, classes = undefined, children }:
  {
    href: string,
    flagPartial?: boolean,
    classes?: string,
    children: React.ReactNode
  }
) {
  const current = usePathname()

  const exact = current === href
  const partial = href !== '/' && current.startsWith(href)

  const ariaCurrent = exact || (flagPartial && partial) ? 'page' : undefined

  return (
    <Link href={href} aria-current={ariaCurrent} className={classes}>
      {children}
    </Link>
  )
}
