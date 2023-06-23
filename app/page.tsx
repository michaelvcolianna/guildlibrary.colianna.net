import Image from 'next/image'
import Link from 'next/link'

// @var string[]
type CardProps = {
  href: string,
  name: string,
  image: string
}

// @var componentObject
const CategoryCard: React.FC<CardProps> = (props) => {
  const { href, name, image } = props

  return <li>
    <Link href={href}>
      <div>{name}</div>
      <Image src={`/assets/categories/${image}.jpg`} alt="" height="300" width="550" />
    </Link>
  </li>
}

export default function HomePage() {
  return (
    <>
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
    </>
  )
}
