import BackLink from '@/app/back-link'
import Breadcrumbs from '@/app/breadcrumbs'
import EntryContent from '@/app/entry-content'
import EntryHero from '@/app/entry-hero'
import EntryNav from '@/app/entry-nav'
import EntryTitle from '@/app/entry-title'
import Inner from '@/app/inner'
import PageHeading from '@/app/page-heading'

import { allEntries } from 'contentlayer/generated'
import { getCategory, makeUrl } from '@/app/categories'
import { getEntryWithAdjacent } from '@/app/entries'

// Get the values for the entry's URL
export const generateStaticParams = async () => allEntries.map(entry => ({
  category: entry.category,
  slug: entry._raw.flattenedPath
}))

// For the tab/window title (won't ever have spoilers)
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
    description: excerpt,
    robots: 'noai, noimageai'
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
    entry,
    previous: previousEntry,
    next: nextEntry
  } = getEntryWithAdjacent(categorySlug, entrySlug)

  const { hero, title, body } = entry
  const { html } = body

  return (
    <Inner grid={true}>
      <Breadcrumbs>
          <BackLink href="/">Back to Home</BackLink>

          <BackLink href={makeUrl(categorySlug)}>
            Back to {categoryName}
          </BackLink>
      </Breadcrumbs>

      <article className="grid gap-4">
        <PageHeading>
          <small className="uppercase text-sm block">Entry</small>
          <EntryTitle entry={entry} />
        </PageHeading>

        {hero && <EntryHero hero={hero} dimension={256} />}

        <EntryContent entry={entry} />
      </article>

      <nav aria-label="Previous and next entries">
        <ul className="grid gap-4 lg:grid-cols-2">
          {previousEntry
            ? <EntryNav entry={previousEntry} direction="Previous" />
            : <li></li>
          }

          {nextEntry
            ? <EntryNav entry={nextEntry} direction="Next" />
            : <li></li>
          }
        </ul>
      </nav>
    </Inner>
  )
}
