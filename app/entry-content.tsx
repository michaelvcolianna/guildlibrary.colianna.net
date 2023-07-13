'use client'

import { Entry } from 'contentlayer/generated'
import { fromLocalStorage } from '@/app/spoiler-button'
import { getEntryContent } from '@/app/entries'
import { useEffect, useState } from 'react'

/**
 * Entry content item.
 *
 * @param  Entry  entry
 * @return ReactNode
 */
export default function EntryContent({ entry }: { entry: Entry }) {
  // Variable/setter for the spoilers
  const [showSpoilers, setShowSpoilers] = useState(false)

  // Get the value from local storage on load
  useEffect(() => {
    setShowSpoilers(fromLocalStorage())
  }, [])

  return (
    <div
      className="prose prose-stone"
      dangerouslySetInnerHTML={{ __html: getEntryContent(entry, showSpoilers) }}
    />
  )
}
