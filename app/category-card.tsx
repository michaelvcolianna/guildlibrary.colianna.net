import Image from 'next/image'
import Link from 'next/link'

import { CatProps, makeUrl, makeSrc } from '@/app/categories'

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
    <li>
      <Link href={makeUrl(slug)} className="relative">
        <div className="absolute bottom-2 left-2 py-1 px-3 bg-white">{name}</div>

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
