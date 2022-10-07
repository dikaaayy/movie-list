import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SearchList({ result }: any) {
  const {
    original_title,
    poster_path,
    release_date,
    overview,
    id,
    title,
    name,
    original_name,
  } = result
  return (
    <Link
      href={`/movie/${id}?title=${encodeURIComponent(
        result?.title || result?.name || result?.original_name
      )}`}
    >
      <a className="flex w-[80%] rounded bg-[#171717] text-white transition hover:bg-[#252525]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          width={6 * 30}
          height={8 * 30}
          className="self-start rounded"
          layout="fixed"
        />
        <div className="ml-5 w-full py-2 pr-5">
          <p className="text-2xl font-medium">
            {original_title || title || name || original_name}
          </p>
          <p className="text-slate-300">{release_date}</p>
          <p className="mt-5">{overview}</p>
        </div>
      </a>
    </Link>
  )
}
