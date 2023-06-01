import Link from 'next/link'
import { allEntries, Entry } from 'contentlayer/generated'

function EntryCard(entry: Entry) {
  return (
    <div>
      <h2>
        <Link href={entry.url}>{entry.title}</Link>
      </h2>

      <div dangerouslySetInnerHTML={{ __html: entry.body.html }} />
    </div>
  )
}

const CategoryPage = ({ params }: {
  params: {
    category: string
  }
}) => {
  const entries = allEntries.filter(entry => {
    return entry.category === params.category
  }).sort((a, b) => a.ordering - b.ordering)

  return (
    <div>
      <h1>Category Page: {params.category
        .split('-')
        .map(a => a.charAt(0).toUpperCase() + a.substring(1))
        .join('/')
      }</h1>

      <div>
        <Link href="/">Back to Home</Link>
      </div>

      {entries.map((entry, idx) => (
        <EntryCard key={idx} {...entry} />
      ))}
    </div>
  )
}

export default CategoryPage
