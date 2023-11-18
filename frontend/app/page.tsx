import CategoryCard from '@/app/category-card'
import Inner from '@/app/inner'
import PageHeading from '@/app/page-heading'

import { categoryList } from '@/app/categories'

// @var string[]
export const metadata = {
  title: 'The Guild Library Appendix',
  description: 'The home page for the Guild Library Appendix, with a list of categories',
}

// @return ReactNode
export default function HomePage() {
  return (
    <Inner grid={true}>
      <PageHeading>Home Page</PageHeading>

      <p>Welcome to the Guild Library Appendix. This is a collection of things that appear in the story <strong>Fractured Children of Earth</strong>, by Michael V. Colianna. Pick a category from the navigation above or from the list below – whichever you prefer: they're the same!</p>

      <p>Most of the information is in the book, but in some cases (birthdays, historical background, and so on) there may be some extra details in the entries. The button in the header will show and hide spoilers, which are what's known by the end of the book.</p>

      <ul className="grid gap-4 lg:grid-cols-2">
        {categoryList.map((category, idx) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </ul>
    </Inner>
  )
}
