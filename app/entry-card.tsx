import EntryHero from '@/app/entry-hero'
import Link from 'next/link'

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
    <li className="grid gap-4 grid-cols-[64px_1fr]">
      <EntryHero hero={hero} />

      <div>
        <h2>
          <Link className="font-bold text-lg underline" href={url}>{title}</Link>
        </h2>

        <div>{excerpt}</div>
      </div>
    </li>
  )
}
