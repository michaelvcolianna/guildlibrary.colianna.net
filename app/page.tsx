import Image from 'next/image'
import Link from 'next/link'
import { categoryList } from '@/app/categories'

export const metadata = {
  title: 'The Guild Library Appendix',
  description: 'The home page for the Guild Library Appendix, with a list of categories',
}

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
            <Link href={category.href}>
              <div>{category.name}</div>

              <Image
                src={`/assets/categories/${category.image}.jpg`}
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
