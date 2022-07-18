import { useEffect, useState } from 'react'
import axios from '../apifetch/axios'
import Modal from '../modal/Modal'
import { AnimatePresence } from 'framer-motion'
import classNames from 'classnames'
import { translateMap } from '../constant'
const imgURL = 'https://image.tmdb.org/t/p/original/'

export default function RecommendationRow({ title, movies }: any) {
  // const [movies, setMovies] = useState<any[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMovie, setModalMovie] = useState<any>({})
  const [sliderValue, setSliderValue] = useState(0)

  const slideNext = () => {
    if (sliderValue < 160) {
      setSliderValue(sliderValue + 20)
    } else {
      setSliderValue(0)
    }
  }
  const slidePrev = () => {
    if (sliderValue > 0) {
      setSliderValue(sliderValue - 20)
    } else {
      setSliderValue(0)
    }
  }

  const close = () => {
    setIsModalOpen(false)
    setModalMovie({})
  }
  const open = (movie: any) => {
    setIsModalOpen(true)
    setModalMovie(movie)
  }
  return (
    <>
      <div className="relative overflow-hidden">
        <h2 className="-mb-11 ml-9 cursor-pointer text-3xl font-semibold text-[#eeeeee] transition hover:text-white">
          {title}
        </h2>
        <div
          className={`absolute left-0 top-[11%] z-20 flex h-[20.5rem] w-[4rem] cursor-pointer items-center justify-center rounded bg-black text-white opacity-20 transition hover:opacity-80 ${
            sliderValue < 1 ? 'hidden' : 'block'
          }`}
          onClick={slidePrev}
        >
          <button className="align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div
          className={classNames(
            // @ts-ignore
            translateMap[sliderValue],
            'slider flex transform items-center gap-x-4 py-14 transition-all duration-700 scrollbar-hide md:px-3 lg:px-9'
          )}
        >
          {movies.map((movie: any) => {
            return (
              <div
                className={`group w-52 flex-none overflow-hidden rounded bg-gray-900 shadow-lg transition duration-500 hover:scale-125`}
                key={movie.id}
              >
                <img
                  src={`${imgURL}${movie.poster_path}`}
                  alt=""
                  className={`h-[20rem] w-full cursor-pointer overflow-hidden`}
                  onClick={() => (isModalOpen ? close() : open(movie))}
                />
              </div>
            )
          })}
        </div>
        <div
          className={`absolute right-0 top-[11%] z-20 flex h-[20.5rem] w-[4rem] cursor-pointer items-center justify-center rounded bg-black text-white opacity-20 transition duration-500 hover:opacity-60`}
          onClick={slideNext}
        >
          <button className="align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {isModalOpen && <Modal handleClose={close} movie={modalMovie} />}
        </AnimatePresence>
      </div>
    </>
  )
}
