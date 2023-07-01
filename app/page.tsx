import Image from 'next/image'
import Link from 'next/link'
import { categoryList, makeUrl, makeSrc } from '@/app/categories'

// @var string[]
export const metadata = {
  title: 'The Guild Library Appendix',
  description: 'The home page for the Guild Library Appendix, with a list of categories',
}

// @return ReactNode
export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>

      <p>
        <em>Some descriptive copy will eventually go here.</em>
      </p>

      <ul>
        {categoryList.map((category, idx) => (
          <li key={idx}>
            <Link href={makeUrl(category.slug)}>
              <div>{category.name}</div>

              <Image
                src={makeSrc(category.slug)}
                alt=""
                height="300"
                width="550"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
