import Link from 'next/link'
import React from 'react'

export default function Details({ movie }: any) {
  const minToHour = (n: number) => {
    let hours = n / 60
    let rhours = Math.floor(hours)
    let minutes = (hours - rhours) * 60
    let rminutes = Math.round(minutes)
    return rhours + 'h ' + rminutes + 'm'
  }
  return (
    <>
      <>
        <p className="text-2xl font-semibold">Duration</p>
        <p className="text-[#eaeaea]">{minToHour(movie.runtime)}</p>
      </>
      <>
        <p className="mt-5 text-2xl font-semibold">Genre</p>
        <div className="flex gap-x-1">
          {movie.genres.map((genre: any, i: number, row: any) => {
            if (i + 1 === row.length) {
              return (
                <Link href="/" key={i}>
                  <a className="text-[#eaeaea]">{genre.name}</a>
                </Link>
              )
            } else {
              return (
                <Link href="/" key={i}>
                  <a className="text-[#eaeaea]">{genre.name}, </a>
                </Link>
              )
            }
          })}
        </div>
      </>
      <>
        <p className="mt-5 text-2xl font-semibold">Budget</p>
        <p className="text-[#eaeaea]">
          ${movie.budget.toLocaleString('en-US')}
        </p>
      </>
      <>
        <p className="mt-5 text-2xl font-semibold">Revenue</p>
        <p className="text-[#eaeaea]">
          ${movie.revenue.toLocaleString('en-US')}
        </p>
      </>
    </>
  )
}
