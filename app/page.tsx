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

export default function Home() {
  const entries = allEntries.sort((a, b) => a.ordering - b.ordering)

  return (
    <div>
      <h1>Next.js + Contentlayer Example</h1>

      {entries.map((entry, idx) => (
        <EntryCard key={idx} {...entry} />
      ))}
    </div>
  )
}
