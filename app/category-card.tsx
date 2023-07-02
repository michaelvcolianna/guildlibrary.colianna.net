import Image from 'next/image'
import Link from 'next/link'
import { CatProps, makeUrl, makeSrc } from '@/app/categories'
import styles from '@/app/category-card.module.scss'

/**
 * Category card list item.
 *
 * @param  CatProps  category
 * @return ReactNode
 */
export default function CategoryCard(
  {
    category: {
      slug,
      name
    }
  }:
  { category: CatProps }
) {
  return (
    <li className={styles.link}>
      <Link href={makeUrl(slug)}>
        <div>{name}</div>

        <Image
          src={makeSrc(slug)}
          alt=""
          height="300"
          width="550"
        />
      </Link>
    </li>
  )
}
