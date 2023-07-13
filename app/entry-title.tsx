'use client'

import { Entry } from 'contentlayer/generated'
import { fromLocalStorage } from '@/app/spoiler-button'
import { getEntryTitle } from '@/app/entries'
import { useEffect, useState } from 'react'

/**
 * Entry title item.
 *
 * @param  Entry  entry
 * @return ReactNode
 */
export default function EntryTitle({ entry }: { entry: Entry }) {
  // Variable/setter for the spoilers
  const [showSpoilers, setShowSpoilers] = useState(false)

  // Get the value from local storage on load
  useEffect(() => {
    setShowSpoilers(fromLocalStorage())
  }, [])

  return <span>{getEntryTitle(entry, showSpoilers)}</span>
}
