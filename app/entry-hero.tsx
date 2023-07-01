import Image from 'next/image'

/**
 * Entry card list item.
 *
 * @param  string  hero
 * @return ReactNode
 */
export default function EntryHero(
  { hero }:
  { hero: string|undefined }
) {
  return (
    <div>
      <Image
        src={`/assets/${hero ?? 'unknown.jpg'}`}
        alt=""
        height="64"
        width="64"
      />
    </div>
  )
}
