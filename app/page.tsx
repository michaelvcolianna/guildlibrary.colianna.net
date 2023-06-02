import Image from 'next/image'
import Link from 'next/link'

function CategoryCard({ href, name, image }) {
  return <li>
    <Link href={href}>
      <div>{name}</div>
      <Image src={`/assets/categories/${image}.jpg`} alt="" height="300" width="550" />
    </Link>
  </li>
}

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <ul>
        <CategoryCard
          href="/category/characters"
          name="Characters"
          image="characters"
        />

        <CategoryCard
          href="/category/culture-history"
          name="Culture/History"
          image="culture-history"
        />

        <CategoryCard
          href="/category/mysteries"
          name="Mysteries"
          image="mysteries"
        />

        <CategoryCard
          href="/category/organizations"
          name="Organizations"
          image="organizations"
        />

        <CategoryCard
          href="/category/planets-cities"
          name="Planets/Cities"
          image="planets-cities"
        />

        <CategoryCard
          href="/category/spaceships"
          name="Spaceships"
          image="spaceships"
        />

        <CategoryCard
          href="/category/tech-futurism"
          name="Tech/Futurism"
          image="tech-futurism"
        />
      </ul>
    </div>
  )
}

export default HomePage
