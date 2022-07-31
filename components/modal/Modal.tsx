import Backdrop from './Backdrop'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
// import genres from '../genre'
// import { useState } from 'react'

const imgURL = 'https://image.tmdb.org/t/p/original/'
const dropIn = {
  hidden: {
    y: '100vh',
    opacity: 1,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
    opacity: 1,
  },
  exit: {
    y: '-100vh',
    opacity: 1,
  },
}

export default function Modal({
  handleClose,
  movie,
}: {
  handleClose: any
  movie: any
}) {
  function truncate(str: any, n: any) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }
  const routeLogic = (type: any) => {
    if (type) {
      return type
    } else;
    {
      return 'movie'
    }
  }

  // const [movieGenre, setMovieGenre] = useState([])
  // console.log(movie)
  return (
    <>
      <Head>
        <title>
          {movie?.title || movie?.name || movie?.original_name} | Overview
        </title>
        <link
          rel="icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>
      <Backdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="relative m-auto h-fit w-[90%] overflow-scroll overflow-x-hidden rounded-lg bg-[#080c0d] pb-5 scrollbar-hide lg:w-[60rem]"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="absolute top-2 right-2">
            <button
              className=" rounded-full bg-black bg-opacity-30 p-1 text-white transition hover:bg-opacity-50"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <img
            src={`${imgURL}${movie.backdrop_path}`}
            alt={movie?.title || movie?.original_title}
            className="w-full"
          />
          <div className="flex flex-col space-y-8 md:flex-row md:space-y-0">
            <div className="basis-3/4 px-3 pt-8">
              <h2 className="mb-2 text-4xl font-semibold text-white">
                {movie?.title || movie?.name || movie?.original_name}
              </h2>
              <h4 className="mb-4 text-lg font-semibold text-green-400">
                {movie?.first_air_date || movie?.release_date}
              </h4>
              <p className="leading-relaxed tracking-wide text-white">
                "{truncate(movie?.overview, 500)}"
              </p>
            </div>
            <div className="flex basis-1/4 items-center justify-center text-white">
              <Link
                href={
                  `/${routeLogic(movie.media_type)}/` +
                  movie.id +
                  '?title=' +
                  encodeURIComponent(
                    movie?.title || movie?.name || movie?.original_name
                  )
                }
              >
                <a className="text-xl transition hover:text-gray-300">
                  Click for More
                </a>
              </Link>
            </div>
          </div>
        </motion.div>
      </Backdrop>
    </>
  )
}
