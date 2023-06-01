import Link from 'next/link'
import { allEntries } from 'contentlayer/generated'
import guildUtils from '@/app/utils'

export const generateStaticParams = async () => allEntries.map((entry) => ({
  category: entry.category,
  slug: entry._raw.flattenedPath
}))

export const generateMetadata = ({ params }: {
  params: {
    category: string,
    slug: string
  }
}) => {
  const entry = allEntries.find((entry) => entry.category === params.category && entry._raw.flattenedPath === params.slug)

  if(!entry) {
    throw new Error(`Entry not found for slug: ${params.category}/${params.slug}`)
  }

  return {
    title: entry.title
  }
}

const EntryLayout = ({ params }: {
  params: {
    category: string,
    slug: string
  }
}) => {
  const entry = allEntries.find((entry) => entry.category === params.category && entry._raw.flattenedPath === params.slug)

  if(!entry) {
    throw new Error(`Entry not found for slug: ${params.category}/${params.slug}`)
  }

  return (
    <article>
      <h1>Entry: {entry.title}</h1>

      <div>
        <Link href="/">Back to Home</Link>
      </div>

      <div>
        <Link href={`/category/${entry.category}`}>Back to {guildUtils.categoryName(entry.category)}</Link>
      </div>

      <div dangerouslySetInnerHTML={{ __html: entry.body.html }} />

      <pre>goal: swap title/content iteratively if needed using: {JSON.stringify(entry.spoilers, null, 2)}</pre>
    </article>
  )
}

export default EntryLayout
