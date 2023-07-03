import BackLink from '@/app/back-link'
import EntryNav from '@/app/entry-nav'
import EntryHero from '@/app/entry-hero'
import { allEntries } from 'contentlayer/generated'
import { getCategory, makeUrl } from '@/app/categories'
import { getEntryWithAdjacent } from '@/app/entries'
import styles from '@/app/category/[category]/[slug]/page.module.scss'

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
      <div className="page-nav">
          <BackLink href="/">Back to Home</BackLink>

          <BackLink href={makeUrl(categorySlug)}>
            Back to {categoryName}
          </BackLink>
      </div>

      <article className={`inner ${styles.entry}`}>
        <h1>
          <small>Entry</small>
          <span>{title}</span>
        </h1>

        {hero && <EntryHero hero={hero} dimension={256} />}

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <nav aria-label="Previous and next entries" className={styles.adjacent}>
        <ul>
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
    </>
  )
}
