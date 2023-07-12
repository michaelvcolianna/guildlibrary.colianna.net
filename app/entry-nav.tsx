import Link from 'next/link'
import { Entry } from 'contentlayer/generated'

/**
 * Entry previous/next navigation.
 *
 * @param  Entry  entry
 * @param  string  direction
 * @return ReactNode
 */
export default function EntryNav(
  { entry, direction }:
  {
    entry: Entry,
    direction: string
  }
) {
  const { url, title } = entry

  const classNames = `grid ${direction === 'Next' ? 'justify-self-end' : ''}`

  return (
    <li className={classNames}>
      <strong className="text-sm uppercase">{direction}</strong>

      <Link href={url} className="underline">{title}</Link>
    </li>
  )
}
