import BackLink from '@/app/back-link'
import Breadcrumbs from '@/app/breadcrumbs'
import EntryCard from '@/app/entry-card'
import Inner from '@/app/inner'
import PageHeading from '@/app/page-heading'

import { allEntries } from 'contentlayer/generated'
import { getCategory } from '@/app/categories'

// For the tab/window title (won't ever have spoilers)
export const generateMetadata = (
  { params }:
  {
    params: {
      category: string
    }
  }
) => {
  const { name, description } = getCategory(params.category)

  return {
    title: `Category: ${name} | The Guild Library Appendix`,
    description: description,
    robots: 'noai, noimageai'
  }
}

// @return ReactNode
export default function CategoryPage(
  { params }:
  {
    params: {
      category: string
    }
  }
) {
  const { category: categorySlug } = params
  const { name, description } = getCategory(categorySlug)

  // Create the filtered & sorted list of entries for this category
  const entries = allEntries
    .filter(entry => entry.category === categorySlug)
    .sort((a, b) => a.ordering - b.ordering)

  return (
    <Inner grid={true}>
      <Breadcrumbs>
        <BackLink href="/">Back to Home</BackLink>
      </Breadcrumbs>

      <div className="grid gap-4">
        <PageHeading>Category Page: {name}</PageHeading>

        <p>{description}</p>

        <ol className="grid gap-4 lg:grid-cols-2">
          {entries.map((entry, idx) => (
            <EntryCard key={idx} entry={entry} />
          ))}
        </ol>
      </div>
    </Inner>
  )
}
