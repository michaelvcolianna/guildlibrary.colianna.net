import Link from 'next/link'
import EntryNav from '@/app/entry-nav'
import EntryHero from '@/app/entry-hero'
import { allEntries } from 'contentlayer/generated'
import { getCategory, makeUrl } from '@/app/categories'
import { getEntryWithAdjacent } from '@/app/entries'

// @todo: Swap title/content iteratively if needed using entry.spoilers.

// Get the values for the entry's URL
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
  const {
    entry: {
      title,
      excerpt
    }
  } = getEntryWithAdjacent(params.category, params.slug)

  return {
    title: `Entry: ${title} | The Guild Library Appendix`,
    description: excerpt
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
  const {
    category: categorySlug,
    slug: entrySlug
  } = params

  const { name: categoryName } = getCategory(categorySlug)

  const {
    entry: {
      title,
      hero,
      body: {
        html
      }
    },
    previous: previousEntry,
    next: nextEntry
  } = getEntryWithAdjacent(categorySlug, entrySlug)

  return (
    <>
      <article>
        <h1>Entry: {title}</h1>

        <div>
          <Link href="/">Back to Home</Link>
        </div>

        <div>
          <Link href={makeUrl(categorySlug)}>
            Back to {categoryName}
          </Link>
        </div>

        {hero && <EntryHero hero={hero} />}

        <div dangerouslySetInnerHTML={{ __html: html }} />

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
