import Image from 'next/image'

export default function Casts({ person }: any) {
  return (
    <div className="mb-1 rounded border-[1px] p-3 pb-0">
      <Image
        src={`https://image.tmdb.org/t/p/original/${person?.profile_path}`}
        width={5.2 * 20}
        height={8 * 20}
        layout="fixed"
      />
      <p>{person?.original_name}</p>
    </div>
  )
}
