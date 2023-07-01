// @var string[]
export type CatProps = {
  name: string,
  slug: string,
  description: string
}

/**
 * Retrieve a category by its slug.
 *
 * @param  string  slug
 * @return CatProps|throwable
 */
export const getCategory = (slug: string) => {
  // Get the possible category information
  const category = categoryList.find(
    category => category.slug === slug
  )

  // Handle a non-existent category
  if(!category) {
    throw new Error(`Category not found for slug: ${slug}`)
  }

  return category
}

/**
 * Create a category url from its slug.
 *
 * @param  string  slug
 * @return string
 */
export const makeUrl = (slug: string) => `/category/${slug}`

/**
 * Create a category's image url from its slug.
 *
 * @param  string  slug
 * @return string
 */
export const makeSrc = (slug: string) => `/assets/categories/${slug}.jpg`

// @var CatProps[]
export const categoryList: Array<CatProps> = [
  {
    name: 'Characters',
    slug: 'characters',
    description: 'A list of characters in the story.'
  },
  {
    name: 'Culture/History',
    slug: 'culture-history',
    description: 'Cultural or other historical elements in the story.'
  },
  {
    name: 'Mysteries',
    slug: 'mysteries',
    description: 'Things that come up during the story but are not explained.'
  },
  {
    name: 'Organizations',
    slug: 'organizations',
    description: 'Various groups in the story.'
  },
  {
    name: 'Planets/Cities',
    slug: 'planets-cities',
    description: 'A list of planets and their cities in the story.'
  },
  {
    name: 'Spaceships',
    slug: 'spaceships',
    description: 'A list of spaceships and their crews in the story.'
  },
  {
    name: 'Tech/Futurism',
    slug: 'tech-futurism',
    description: 'Technologies and other futuristic elements in the story.'
  }
]
