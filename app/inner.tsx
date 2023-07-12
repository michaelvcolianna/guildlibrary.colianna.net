/**
 * Inner wrapper generator.
 *
 * @param  boolean  grid
 * @param  ReactNode  children
 * @return ReactNode
 */
export default function Inner(
  { grid = false, children }:
  {
    grid?: boolean,
    children: React.ReactNode
  }
) {
  const classNames = `max-w-5xl m-auto ${grid ? 'grid gap-4 p-4 lg:px-0' : ''}`

  return <div className={classNames}>{children}</div>
}
