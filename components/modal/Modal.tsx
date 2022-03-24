import Backdrop from './Backdrop'
import { motion } from 'framer-motion'
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
  // const [movieGenre, setMovieGenre] = useState([])
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative m-auto h-[83vh] w-[90%] overflow-scroll overflow-x-hidden rounded-lg bg-[#080c0d] scrollbar-hide lg:w-[60rem]"
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
        <div className="flex">
          <div className="basis-3/4 pt-8 pl-6 md:basis-2/3">
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
          <div className="basis-1/4 pl-4 pt-8 md:basis-1/3">
            <h1 className="text-white">
              <span className=" text-gray-400">Rating: </span>
              {movie.vote_average} / 10
            </h1>
            <h1 className="text-white">
              <span className=" text-gray-400">Popularity: </span>
              {movie.popularity}
            </h1>
            <h1 className="text-white">
              <span className="text-gray-400">Genre: </span>
              {movie.genre_ids}
            </h1>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  )
}
