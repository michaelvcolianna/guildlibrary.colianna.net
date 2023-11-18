/**
 * Page heading generator.
 *
 * @param  ReactNode  children
 * @return ReactNode
 */
export default function PageHeading(
  { children }:
  { children: React.ReactNode }
) {
  return <h1 className="font-bold text-3xl">{children}</h1>
}
