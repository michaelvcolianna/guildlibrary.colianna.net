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
