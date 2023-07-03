import CategoryCard from '@/app/category-card'
import { categoryList } from '@/app/categories'

// @var string[]
export const metadata = {
  title: 'The Guild Library Appendix',
  description: 'The home page for the Guild Library Appendix, with a list of categories',
}

// @return ReactNode
export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <p>
        <em>Some descriptive copy will eventually go here.</em>
      </p>

      <ul>
        {categoryList.map((category, idx) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </ul>
    </div>
  )
}
