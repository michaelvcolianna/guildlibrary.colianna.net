import Image from 'next/image'
import Link from 'next/link'
import { allEntries, Entry } from 'contentlayer/generated'
import guildUtils from '@/app/utils'

function EntryCard(entry: Entry) {
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
      <h1>Category Page: {guildUtils.categoryName(params.category)}</h1>

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
