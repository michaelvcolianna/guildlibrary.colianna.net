import Image from 'next/image'
import Link from 'next/link'
import { allEntries, Entry } from 'contentlayer/generated'
import { categoryName } from '@/app/utils'

// @var string[]
type CardProps = {
  entry: Entry
}

// @var componentObject
const EntryCard: React.FC<CardProps> = (props) => {
  const { entry } = props

  return (
    <div>
      <h2>
        <Link href={entry.url}>{entry.title}</Link>
      </h2>

      <div>
        <Image src={entry.hero ? `/assets/${entry.hero}` : '/assets/unknown.jpg'} alt="" height="64" width="64" />
      </div>

      <div>
        {entry.excerpt}
      </div>
    </div>
  )
}

export default function CategoryPage({
  params
}: {
  params: {
    category: string
  }
}) {
  // Create thhe filtered & sorted list of entries for this category
  const entries = allEntries
    .filter(entry => entry.category === params.category)
    .sort((a, b) => a.ordering - b.ordering)

  return (
    <>
      <h1>Category Page: {categoryName(params.category)}</h1>

      <div>
        <Link href="/">Back to Home</Link>
      </div>

      {entries.map((entry, idx) => (
        <EntryCard key={idx} entry={entry} />
      ))}
    </>
  )
}
