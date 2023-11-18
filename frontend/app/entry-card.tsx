'use client'

import EntryHero from '@/app/entry-hero'
import Link from 'next/link'

import { Entry } from 'contentlayer/generated'
import { fromLocalStorage } from '@/app/spoiler-button'
import { getEntryExcerpt, getEntryTitle } from '@/app/entries'
import { useEffect, useState } from 'react'

/**
 * Entry card list item.
 *
 * @param  Entry  entry
 * @return ReactNode
 */
export default function EntryCard({ entry }: { entry: Entry }) {
  // Variable/setter for the spoilers
  const [showSpoilers, setShowSpoilers] = useState(false)

  // Get the value from local storage on load
  useEffect(() => {
    setShowSpoilers(fromLocalStorage())
  }, [])

  const { hero, url } = entry

  return (
    <li className="grid gap-4 grid-cols-[64px_1fr]">
      <EntryHero hero={hero} />

      <div>
        <h2>
          <Link className="font-bold text-lg underline" href={url}>
            {getEntryTitle(entry, showSpoilers)}
          </Link>
        </h2>

        <div>{getEntryExcerpt(entry, showSpoilers)}</div>
      </div>
    </li>
  )
}
