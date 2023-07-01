import Link from 'next/link'
import EntryHero from '@/app/entry-hero'
import { Entry } from 'contentlayer/generated'

/**
 * Entry card list item.
 *
 * @param  Entry  entry
 * @return ReactNode
 */
export default function EntryCard(
  {
    entry: {
      url,
      title,
      hero,
      excerpt
    }
  }:
  { entry: Entry }
) {
  return (
    <li>
      <h2>
        <Link href={url}>{title}</Link>
      </h2>

      <EntryHero hero={hero} />

      <div>{excerpt}</div>
    </li>
  )
}