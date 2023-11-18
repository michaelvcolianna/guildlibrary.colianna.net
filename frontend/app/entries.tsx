import { allEntries, Entry } from 'contentlayer/generated'

// @var Entry[]
export type EntryProps = {
  entry: Entry,
  previous: Entry|null,
  next: Entry|null
}

// @var number[]
enum Direction {
  Previous = -1,
  Next = 1
}

/**
 * Retrieve the entry before or after a specified entry.
 *
 * @param  Entry  entry
 * @param  Direction  direction
 * @return Entry
 */
function getAdjacentEntry(
  entry: Entry,
  direction: Direction
): Entry|undefined {
  return allEntries.find(
    adjacent => (
      adjacent.category === entry.category
      &&
      adjacent.ordering === entry.ordering + direction
    )
  )
}

/**
 * Retrieve an entry by it's category and slug, as well as any articles that are
 * adjacent to it.
 *
 * @param  string  category
 * @param  string  slug
 * @return EntryProps|throwable
 */
export const getEntryWithAdjacent = (category: string, slug: string) => {
  const entry = allEntries.find(
    entry =>
      entry.category === category
      &&
      entry._raw.flattenedPath === slug
  )

  // Handle an empty possible entry
  if(!entry) {
    throw new Error(`Entry not found for slug: ${category}/${slug}`)
  }

  return {
    entry: entry,
    previous: getAdjacentEntry(entry, Direction.Previous),
    next: getAdjacentEntry(entry, Direction.Next)
  }
}

/**
 * Retrieve an entry's title or spoiler title.
 *
 * @param  Entry  entry
 * @param  boolean  showSpoilers
 * @return string
 */
export const getEntryTitle = (entry: Entry, showSpoilers: boolean) => {
  if(showSpoilers && entry.spoilers && entry.spoilers[0].title) {
    return entry.spoilers[0].title
  }

  return entry.title
}

/**
 * Retrieve an entry's excerpt or spoiler excerpt.
 *
 * @param  Entry  entry
 * @param  boolean  showSpoilers
 * @return string
 */
export const getEntryExcerpt = (entry: Entry, showSpoilers: boolean) => {
  if(showSpoilers && entry.spoilers && entry.spoilers[0].excerpt) {
    return entry.spoilers[0].excerpt
  }

  return entry.excerpt
}

/**
 * Retrieve an entry's content or spoiler content.
 *
 * @param  Entry  entry
 * @param  boolean  showSpoilers
 * @return string
 */
export const getEntryContent = (entry: Entry, showSpoilers: boolean) => {
  if(showSpoilers && entry.spoilers && entry.spoilers[0].content) {
    return entry.spoilers[0].content.html
  }

  return entry.body.html
}
