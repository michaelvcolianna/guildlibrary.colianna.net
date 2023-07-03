import Link from 'next/link'
import { Entry } from 'contentlayer/generated'
import styles from '@/app/entry-nav.module.scss'

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
  const style = styles[`link--${direction}`]

  return (
    <li className={`${styles.link} ${style}`}>
      <strong>{direction}</strong>

      <Link href={url}>{title}</Link>
    </li>
  )
}
