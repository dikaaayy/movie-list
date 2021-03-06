import { useEffect, useState } from 'react'
import axios from '../apifetch/axios'
import Modal from '../modal/Modal'
import { AnimatePresence } from 'framer-motion'
import classNames from 'classnames'
import { translateMap } from '../constant'
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
  const [sliderValue, setSliderValue] = useState(0)
  const [width, setWidth] = useState('')

  useEffect(() => {
    const updateMedia = () => {
      if (window.innerWidth > 0 && window.innerWidth <= 639) {
        setWidth('xsmall')
      } else if (window.innerWidth > 639 && window.innerWidth <= 767) {
        setWidth('small')
      } else if (window.innerWidth > 767 && window.innerWidth <= 1023) {
        setWidth('medium')
      } else if (window.innerWidth > 1023 && window.innerWidth <= 1279) {
        setWidth('large')
      } else if (window.innerWidth > 1279 && window.innerWidth <= 1535) {
        setWidth('xlarge')
      } else {
        setWidth('2xlarge')
      }
      setSliderValue(0)
    }
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [width])

  useEffect(() => {
    if (window.innerWidth > 0 && window.innerWidth <= 639) {
      setWidth('xsmall')
    } else if (window.innerWidth > 639 && window.innerWidth <= 767) {
      setWidth('small')
    } else if (window.innerWidth > 767 && window.innerWidth <= 1023) {
      setWidth('medium')
    } else if (window.innerWidth > 1023 && window.innerWidth <= 1279) {
      setWidth('large')
    } else if (window.innerWidth > 1279 && window.innerWidth <= 1535) {
      setWidth('xlarge')
    } else {
      setWidth('2xlarge')
    }
  }, [])

  // console.log(movies[0])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchURL])

  const slideNext = () => {
    switch (width) {
      case '2xlarge':
        if (sliderValue < 140) {
          setSliderValue(sliderValue + 20)
        } else {
          setSliderValue(0)
        }
        break
      case 'medium':
        if (sliderValue < 540) {
          setSliderValue(sliderValue + 45)
        } else {
          setSliderValue(0)
        }
        break
      case 'xsmall':
        if (sliderValue < 1040) {
          setSliderValue(sliderValue + 120)
        } else {
          setSliderValue(0)
        }
        break
    }
  }
  const slidePrev = () => {
    switch (width) {
      case '2xlarge':
        if (sliderValue > 0) {
          setSliderValue(sliderValue - 20)
        } else {
          setSliderValue(0)
        }
        break
      case 'xsmall':
        if (sliderValue > 0) {
          setSliderValue(sliderValue - 120)
        } else {
          setSliderValue(0)
        }
        break
      case 'medium':
        if (sliderValue > 0) {
          setSliderValue(sliderValue - 45)
        } else {
          setSliderValue(0)
        }
        break
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
      <div className="relative mt-2 ml-6 overflow-hidden">
        <h2 className="-mb-11 cursor-pointer text-3xl font-semibold text-[#eeeeee] transition hover:text-white md:ml-3 lg:ml-9">
          {title}
        </h2>
        <div
          className={`absolute left-0 z-20 flex ${
            isLarge
              ? 'top-[11%] h-[20.5rem] w-[4rem]'
              : 'top-[18%] h-[10.5rem] w-[3rem]'
          } cursor-pointer items-center justify-center rounded bg-black text-white opacity-20 transition hover:opacity-80 ${
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
          {movies.map((movie) => {
            return (
              <div
                className={`group w-52 flex-none overflow-hidden rounded bg-[#252525] shadow-lg transition duration-500 hover:scale-125 ${
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
                  loading="lazy"
                />
              </div>
            )
          })}
        </div>
        <div
          className={`absolute right-0 z-20 flex ${
            isLarge
              ? 'top-[11%] h-[20.5rem] w-[4rem]'
              : 'top-[18%] h-[10.5rem] w-[3rem]'
          } cursor-pointer items-center justify-center rounded bg-black text-white opacity-20 transition duration-500 hover:opacity-60`}
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
