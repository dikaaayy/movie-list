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

  function truncate(str: String, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <Link
      href={`/movie/${id}?title=${encodeURIComponent(
        result?.title || result?.name || result?.original_name
      )}`}
    >
      <a className="flex w-[80%] flex-row overflow-hidden rounded bg-[#171717] text-white transition hover:bg-[#252525]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          width={6 * 30}
          height={8 * 30}
          className="rounded-sm"
          layout="fixed"
        />
        <div className="py-2 md:ml-5 md:w-full md:pr-5">
          <p className="text-lg font-medium md:text-2xl">
            {original_title || title || name || original_name}
          </p>
          <p
            className={`text-sm text-slate-300 ${!release_date && 'invisible'}`}
          >
            {release_date || 'template'}
          </p>
          <p className="mt-5 text-sm">{overview}</p>
        </div>
      </a>
    </Link>
  )
}
