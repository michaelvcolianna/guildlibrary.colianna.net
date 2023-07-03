import Image from 'next/image'
import styles from '@/app/entry-hero.module.scss'

/**
 * Entry card list item.
 *
 * @param  string  hero
 * @param  number  dimension
 * @return ReactNode
 */
export default function EntryHero(
  { hero, dimension = 64 }:
  {
    hero: string|undefined,
    dimension?: number
  }
) {
  const style = {
    '--hero-border-radius': `${dimension}px`
  } as React.CSSProperties

  return (
    <div className={styles.image} style={style}>
      <Image
        src={`/assets/${hero ?? 'unknown.jpg'}`}
        alt=""
        height={dimension}
        width={dimension}
      />
    </div>
  )
}
