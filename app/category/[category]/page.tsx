import BackLink from '@/app/back-link'
import EntryCard from '@/app/entry-card'
import { allEntries } from 'contentlayer/generated'
import { getCategory } from '@/app/categories'

// For the tab/window title
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
    description: description
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
  const { name } = getCategory(categorySlug)

  // Create the filtered & sorted list of entries for this category
  const entries = allEntries
    .filter(entry => entry.category === categorySlug)
    .sort((a, b) => a.ordering - b.ordering)

  return (
    <>
      <div>
        <BackLink href="/">Back to Home</BackLink>
      </div>

      <div>
        <h1>Category Page: {name}</h1>

        <ol>
          {entries.map((entry, idx) => (
            <EntryCard key={idx} entry={entry} />
          ))}
        </ol>
      </div>
    </>
  )
}
