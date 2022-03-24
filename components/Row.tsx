import { useEffect, useState } from 'react'
import instance from './axios'
import axios from './axios'
import Modal from './modal/Modal'
import { AnimatePresence } from 'framer-motion'

const imgURL = 'https://image.tmdb.org/t/p/original/'

export default function Row({
  title,
  fetchURL,
  isLarge,
}: {
  title: any
  fetchURL: any
  isLarge: any
}) {
  const [movies, setMovies] = useState<any[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMovie, setModalMovie] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchURL])

  const close = () => {
    setIsModalOpen(false)
    setModalMovie({})
  }
  const open = (movie: any) => {
    setIsModalOpen(true)
    setModalMovie(movie)
    console.log(movie)
  }
  return (
    <>
      <div className="mt-2 ml-6">
        <h2 className="-mb-11 cursor-pointer text-3xl font-semibold text-[#eeeeee] transition hover:text-white md:ml-3 lg:ml-9">
          {title}
        </h2>
        <div className="flex gap-x-4 overflow-auto py-14 scrollbar-hide md:px-3 lg:px-9">
          {movies.map((movie) => {
            return (
              <div
                className={`group w-52 flex-none overflow-hidden rounded bg-gray-900 shadow-lg transition duration-500 hover:scale-125 ${
                  isLarge ? 'w-52' : 'h-[10rem] w-72'
                }`}
                key={movie.id}
              >
                <img
                  src={`${imgURL}${
                    isLarge ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt=""
                  className={`w-full cursor-pointer overflow-hidden ${
                    isLarge ? 'h-[20rem] w-full' : 'h-[10rem] w-72'
                  }`}
                  onClick={() => (isModalOpen ? close() : open(movie))}
                />
              </div>
            )
          })}
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
