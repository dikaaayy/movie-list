import Image from 'next/image'

export default function Casts({ person }: any) {
  // console.log(person)
  return (
    <div className="mb-3 flex max-w-[8rem] flex-none flex-col overflow-hidden rounded bg-[#242424]">
      <Image
        src={`https://image.tmdb.org/t/p/original/${person?.profile_path}`}
        width={5.5 * 25}
        height={8 * 25}
        layout="fixed"
      />
      <p className="px-1 pt-1 text-lg font-semibold">{person?.original_name}</p>
      <p className="px-1 pt-1 text-[#cecece]">{person?.character}</p>
    </div>
  )
}
