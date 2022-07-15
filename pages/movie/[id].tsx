import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import HeadSection from '../../components/head/HeadSection'
import Navbar from '../../components/Navbar'

export const getServerSideProps = async (context: any) => {
  const movie = await fetch(
    'https://api.themoviedb.org/3/movie/' +
      context.params.id +
      '?api_key=76ebb98bc55f9ac730ad21ae0ef1a116'
  ).then((res) => res.json())
  return {
    props: { movie },
  }
}

export default function Movies({ movie }: any) {
  console.log(movie)
  return (
    <>
      <Head>
        <title>{movie.original_title} | Details </title>
        <link
          rel="icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>
      <div className="relative h-screen select-none bg-[#0a0a0a] font-netflixSans">
        <Navbar />
        <div
          className="absolute mb-5 h-[70vh] w-full bg-cover bg-center blur brightness-50 grayscale"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          }}
        />
        <div className="absolute z-20 mx-28 mt-24 flex space-x-10 border-2">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            width={250}
            height={400}
          />
          <div className="border-2 border-yellow-200">
            <p className="text-2xl font-semibold text-white lg:text-5xl">
              {movie.original_title}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
