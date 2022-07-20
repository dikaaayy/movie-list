import Link from 'next/link'
import React from 'react'

export default function Details({ tvShow }: any) {
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
        <p className="mt-5 text-2xl font-semibold">Season Released</p>
        <p className="text-[#eaeaea]">
          {tvShow?.number_of_seasons} season
          {tvShow?.number_of_seasons > 1 ? 's' : ''}
        </p>
      </>
      <>
        <p className="mt-5 text-2xl font-semibold">Episode Released</p>
        <p className="text-[#eaeaea]">
          {tvShow?.number_of_episodes} episode
          {tvShow?.number_of_episodes > 1 ? 's' : ''}
        </p>
      </>
      <>
        <p className="mt-5 text-2xl font-semibold">Genre</p>
        <div className="flex gap-x-1">
          {tvShow.genres.map((genre: any, i: number, row: any) => {
            if (i + 1 === row.length) {
              return (
                <p key={i} className="text-[#eaeaea]">
                  {genre.name}
                </p>
              )
            } else {
              return (
                <p key={i} className="text-[#eaeaea]">
                  {genre.name}
                  <span className="hover:text-inherit hover:no-underline">
                    ,
                  </span>
                </p>
              )
            }
          })}
        </div>
      </>
    </>
  )
}
