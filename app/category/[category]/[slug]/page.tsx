import Image from 'next/image'
import Link from 'next/link'
import { allEntries, Entry } from 'contentlayer/generated'
import { categoryList } from '@/app/categories'

// @todo: Swap title/content iteratively if needed using entry.spoilers.

// @var string[]
type CatProps = {
  href: string,
  name: string,
  image: string
}

/**
 * Retrieve the category specified in the URL.
 *
 * @param  object  params
 * @return CatProps
 */
function getCategory(
  params: {
    category: string
  }
): CatProps {
  // Get the category information
  const category = categoryList.find(
    category => category.image === params.category
  )

  // Handle a non-existent category
  if(!category) {
    throw new Error(`Category not found for slug: ${params.category}`)
  }

  return category
}

/**
 * Retrieve the entry specified in the URL.
 *
 * @todo Maybe output an object w/adjacent entries?
 *
 * @param  object  params
 * @return Entry
 */
function getEntry(
  params: {
    category: string,
    slug: string
  }
): Entry {
  // Can't try/catch, so first search the entries list
  let possibleEntry = allEntries.find(
    entry =>
      entry.category === params.category
      &&
      entry._raw.flattenedPath === params.slug
  )

  // Handle an empty possible entry
  if(!possibleEntry) {
    throw new Error(`Entry not found for slug: ${params.category}/${params.slug}`)
  }

  return possibleEntry
}

// @var number[]
enum Direction {
  Previous = -1,
  Next = 1
}

/**
 * Retrieve an entry before or after a specified entry.
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
    adjacent =>
      adjacent.category === entry.category
      &&
      adjacent.ordering === entry.ordering + direction
    )
}

// @var string[]
type NavProps = {
  entry: Entry,
  direction: string
}

// @var componentObject
const EntryNav: React.FC<NavProps> = (props) => {
  const { entry, direction } = props

  return (
    <li>
      <strong>{direction}:</strong>

      <Link href={entry.url}>{entry.title}</Link>
    </li>
  )
}

// Get the values from the URL
export const generateStaticParams = async () => allEntries.map(entry => ({
  category: entry.category,
  slug: entry._raw.flattenedPath
}))

// For the tab/window title
export const generateMetadata = (
  { params }:
  {
    params: {
      category: string,
      slug: string
    }
  }
) => {
  const entry = getEntry(params)

  return {
    title: `Entry: ${entry.title} | The Guild Library Appendix`,
    description: entry.excerpt
  }
}

export default function EntryLayout({
  params
}: {
  params: {
    category: string,
    slug: string
  }
}) {
  const category = getCategory(params)
  const entry = getEntry(params)
  const previousEntry = getAdjacentEntry(entry, Direction.Previous)
  const nextEntry = getAdjacentEntry(entry, Direction.Next)

  return (
    <>
      <article>
        <h1>Entry: {entry.title}</h1>

        <div>
          <Link href="/">Back to Home</Link>
        </div>

        <div>
          <Link href={`/category/${entry.category}`}>
            Back to {category.name}
          </Link>
        </div>

        {entry.hero && (
          <div>
            <Image
              src={`/assets/${entry.hero}`}
              alt=""
              height="300"
              width="300"
            />
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: entry.body.html }} />

        <nav aria-label="Previous and next entries">
          <ul>
            {previousEntry && (
              <EntryNav entry={previousEntry} direction="Previous" />
            )}

            {nextEntry && (
              <EntryNav entry={nextEntry} direction="Next" />
            )}
          </ul>
        </nav>
      </article>
    </>
  )
}
