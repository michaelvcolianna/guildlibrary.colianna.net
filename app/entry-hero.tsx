import Image from 'next/image'

/**
 * Entry card list item.
 *
 * @param  string  hero
 * @param  number  dimension
 * @return ReactNode
 */
export default function EntryHero(
  { hero, dimension = 64 }:
  {
    hero: string|undefined,
    dimension?: number
  }
) {
  return (
    <div>
      <Image
        src={`/assets/${hero ?? 'unknown.jpg'}`}
        alt=""
        height={dimension}
        width={dimension}
        className="rounded-full border-2 border-black"
      />
    </div>
  )
}
