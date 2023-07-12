/**
 * Breadcrumbs generator.
 *
 * @param  ReactNode  children
 * @return ReactNode
 */
export default function Breadcrumbs(
  { children }:
  { children: React.ReactNode }
) {
  return <div className="flex gap-4">{children}</div>
}
