import { allEntries } from 'contentlayer/generated'

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
      <h1>{entry.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: entry.body.html }} />

      {entry.spoilers && (
        <pre>goal: swap title/content iteratively if needed using: {JSON.stringify(entry.spoilers, null, 2)}</pre>
      )}
    </article>
  )
}

export default EntryLayout
