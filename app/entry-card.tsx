import Link from 'next/link'
import EntryHero from '@/app/entry-hero'
import { Entry } from 'contentlayer/generated'
import styles from '@/app/entry-card.module.scss'

/**
 * Entry card list item.
 *
 * @param  Entry  entry
 * @return ReactNode
 */
export default function EntryCard(
  {
    entry: {
      url,
      title,
      hero,
      excerpt
    }
  }:
  { entry: Entry }
) {
  return (
    <li className={styles.item}>
      <EntryHero hero={hero} />

      <div className={styles.details}>
        <h2>
          <Link href={url}>{title}</Link>
        </h2>

        <div>{excerpt}</div>
      </div>
    </li>
  )
}
