import Image from 'next/image'
import Link from 'next/link'
import { allEntries } from 'contentlayer/generated'
import { categoryList } from '@/app/categories'

// For the tab/window title
export const generateMetadata = (
  { params }:
  {
    params: {
      category: string
    }
  }
) => {
  // Get the category information
  const category = categoryList.find(
    category => category.image === params.category
  )

  // Handle a non-existent category
  if(!category) {
    throw new Error(`Category not found for slug: ${params.category}`)
  }

  return {
    title: `Category: ${category.name} | The Guild Library Appendix`,
    description: category.description
  }
}

export default function CategoryPage(
  { params }:
  {
    params: {
      category: string
    }
  }
) {
  // Get the category information
  const category = categoryList.find(
    category => category.image === params.category
  )

  // Handle a non-existent category
  if(!category) {
    throw new Error(`Category not found for slug: ${params.category}`)
  }

  // Create the filtered & sorted list of entries for this category
  const entries = allEntries
    .filter(entry => entry.category === params.category)
    .sort((a, b) => a.ordering - b.ordering)

  return (
    <>
      <h1>Category Page: {category.name}</h1>

      <div>
        <Link href="/">Back to Home</Link>
      </div>

      <ol>
        {entries.map((entry, idx) => (
          <li key={idx}>
            <h2>
              <Link href={entry.url}>{entry.title}</Link>
            </h2>

            <div>
              <Image
                src={`/assets/${entry.hero ?? 'unknown.jpg'}`}
                alt=""
                height="64"
                width="64"
              />
            </div>

            <div>
              {entry.excerpt}
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}
