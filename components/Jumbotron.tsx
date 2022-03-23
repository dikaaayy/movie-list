import { useEffect, useState } from 'react'
import axios from './axios'
import request from './request'
import Modal from './modal/Modal'
import { AnimatePresence } from 'framer-motion'

const imgURL = 'https://image.tmdb.org/t/p/original/'

export default function Jumbotron() {
  const [movie, setMovie] = useState<any>({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMovie, setModalMovie] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(request.getTrending)
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      )
      return req
    }
    fetchData()
  }, [])
  console.log(movie)
  const close = () => {
    setIsModalOpen(false)
    setModalMovie({})
  }
  const open = (movie: any) => {
    setIsModalOpen(true)
    setModalMovie(movie)
    console.log(movie)
  }

  function truncate(str: any, n: any) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <>
      <div
        className="mb-16 flex h-[80vh] max-w-full flex-col items-start justify-between justify-items-start gap-x-28 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgURL}${movie?.backdrop_path})`,
        }}
      >
        <div className="invisible">
          <p>a</p>
        </div>
        <div>
          <div className="max-h-1/2 ml-14 w-1/3">
            <h1 className="mb-6 text-6xl font-semibold text-white">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className="hidden text-lg tracking-wider text-white md:inline">
              {truncate(movie?.overview, 200)}
            </p>
            <div className="mt-8 flex gap-x-4 lg:mt-5">
              <button className="flex items-center justify-center gap-x-2 rounded bg-white px-5 py-2 transition hover:bg-opacity-70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xl font-semibold">Play</p>
              </button>
              <button className="flex items-center justify-center gap-x-2 rounded bg-gray-400 bg-opacity-40 px-5 py-2 text-white transition hover:bg-opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p
                  className="text-xl font-semibold"
                  onClick={() => (isModalOpen ? close() : open(movie))}
                >
                  Info
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="h-24 w-full bg-gradient-to-t from-black to-transparent md:h-14">
          <div>
            <p className="invisible">a</p>
          </div>
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
