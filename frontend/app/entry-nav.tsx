'use client'

import Link from 'next/link'

import { Entry } from 'contentlayer/generated'
import { fromLocalStorage } from '@/app/spoiler-button'
import { getEntryTitle } from '@/app/entries'
import { useEffect, useState } from 'react'

/**
 * Entry previous/next navigation.
 *
 * @param  Entry  entry
 * @param  string  direction
 * @return ReactNode
 */
export default function EntryNav(
  { entry, direction }:
  {
    entry: Entry,
    direction: string
  }
) {
  // Variable/setter for the spoilers
  const [showSpoilers, setShowSpoilers] = useState(false)

  // Get the value from local storage on load
  useEffect(() => {
    setShowSpoilers(fromLocalStorage())
  }, [])

  const { url, title } = entry

  const classNames = `grid ${direction === 'Next' ? 'justify-self-end' : ''}`

  return (
    <li className={classNames}>
      <strong className="text-sm uppercase">{direction}</strong>

      <Link href={url} className="underline">
        {getEntryTitle(entry, showSpoilers)}
      </Link>
    </li>
  )
}
