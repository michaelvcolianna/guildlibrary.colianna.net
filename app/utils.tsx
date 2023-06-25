/**
 * Make a category display name from a kebab string.
 *
 * Splits the kebab string by dash, capitalizes the first character of each
 * element in the resulting array, then joins them with a slash.
 *
 * @todo Maybe not needed any more?
 *
 * @param  string  name
 * @return string
 */
export const categoryName = (name: string) => name
  .split('-')
  .map(a => a.charAt(0).toUpperCase() + a.substring(1))
  .join('/')

