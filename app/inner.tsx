/**
 * Inner wrapper generator.
 *
 * @param  ReactNode  children
 * @return ReactNode
 */
export default function Inner({ children }: { children: React.ReactNode }) {
  return <div className="max-w-5xl m-auto">{children}</div>
}
