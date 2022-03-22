import { useEffect, useState } from 'react'
import instance from './axios'
import axios from './axios'
import Modal from './modal/Modal'

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
  const [hovered, setHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleHover = () => setHovered(!hovered)

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchURL])

  const modalHandler = () => {
    ;<Modal />
  }
  return (
    <>
      <div className="mt-10 ml-10">
        <h2 className="-mb-8 ml-7 text-3xl font-semibold text-white">
          {title}
        </h2>
        <div className="flex gap-x-4 overflow-auto p-7 py-14 scrollbar-hide">
          {movies.map((movie) => {
            return (
              <div
                className={`group w-52 flex-none overflow-hidden rounded bg-gray-500 shadow-lg transition duration-500 hover:scale-125 ${
                  hovered ? 'h-[20rem]' : 'h-[20rem]'
                } ${isLarge ? 'w-52' : 'h-[10rem] w-72'}`}
                key={movie.id}
              >
                <img
                  src={`${imgURL}${
                    isLarge ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt=""
                  className={`w-full overflow-hidden ${
                    hovered ? 'h-[20rem]' : 'h-[20rem]'
                  } ${isLarge ? 'h-[20rem] w-full' : 'h-[10rem] w-72'}`}
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                  onClick={modalHandler}
                />
                <div
                  className={`flex h-1/6 items-center justify-center ${
                    hovered ? 'block' : 'hidden'
                  }`}
                >
                  <h3 className="my-auto text-center text-white">
                    {movie.title || movie.name || movie.original_name}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
