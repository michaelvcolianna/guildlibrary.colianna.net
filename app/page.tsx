import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <ul>
        <li>
          <Link href="/category/characters">Characters</Link>
        </li>
        <li>
          <Link href="/category/culture-history">Culture/History</Link>
        </li>
        <li>
          <Link href="/category/mysteries">Mysteries</Link>
        </li>
        <li>
          <Link href="/category/organizations">Organizations</Link>
        </li>
        <li>
          <Link href="/category/planets-cities">Planets/Cities</Link>
        </li>
        <li>
          <Link href="/category/spaceships">Spaceships</Link>
        </li>
        <li>
          <Link href="/category/tech-futurism">Tech/Futurism</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
