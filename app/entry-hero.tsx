import Image from 'next/image'
import styles from '@/app/entry-hero.module.scss'

/**
 * Entry card list item.
 *
 * @param  string  hero
 * @return ReactNode
 */
export default function EntryHero(
  { hero }:
  { hero: string|undefined }
) {
  return (
    <div className={styles.image}>
      <Image
        src={`/assets/${hero ?? 'unknown.jpg'}`}
        alt=""
        height="64"
        width="64"
      />
    </div>
  )
}
