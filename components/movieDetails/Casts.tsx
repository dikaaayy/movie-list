import Image from 'next/image'

export default function Casts({ person }: any) {
  const { profile_path, original_name, character } = person
  return (
    <div className="mb-3 flex max-w-[8rem] flex-none flex-col overflow-hidden rounded bg-[#242424]">
      {profile_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/original/${profile_path}`}
          width={5.5 * 25}
          height={8 * 25}
          layout="fixed"
        />
      ) : (
        <Image
          src={`/casts_template.svg`}
          width={5.5 * 25}
          height={8 * 25}
          layout="fixed"
        />
      )}
      <p className="px-1 pt-1 text-lg font-semibold">{original_name}</p>
      <p className="px-1 pt-1 text-[#cecece]">{character}</p>
    </div>
  )
}
