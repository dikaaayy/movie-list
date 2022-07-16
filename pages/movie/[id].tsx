import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

export const getServerSideProps = async (context: any) => {
  const { id } = context.params
  const { title } = context.query
  const movie = await fetch(
    'https://api.themoviedb.org/3/movie/' +
      id +
      '?api_key=76ebb98bc55f9ac730ad21ae0ef1a116'
  ).then((res) => res.json())

  if (
    (movie?.title || movie?.name || movie?.original_name) !== title ||
    !movie
  ) {
    return {
      redirect: {
        permanent: false,
        destination: `/tv/${id}?title=${encodeURIComponent(title)}`,
      },
    }
  }
  const casts = await fetch(
    'https://api.themoviedb.org/3/movie/' +
      id +
      '/credits?api_key=76ebb98bc55f9ac730ad21ae0ef1a116'
  ).then((res) => res.json())
  return {
    props: { movie, casts },
  }
}

export default function Movies({ movie, casts }: any) {
  const { cast } = casts
  console.log(movie)
  return (
    <>
      <Head>
        <title>{movie.name || movie.original_title} | Details </title>
        <link
          rel="icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>
      <div className="relative h-[200vh] select-none bg-[#0a0a0a] font-netflixSans">
        <Navbar />
        <div
          className="absolute mb-5 h-[75vh] w-full bg-cover bg-center blur brightness-50 grayscale"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          }}
        />
        <div className="absolute z-20 mx-10 mt-24 flex flex-col border-2 md:mx-48 md:flex-row md:space-x-10">
          {/*ratio gambar 5:8*/}
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            width={5 * 65}
            height={8 * 65}
            className="self-start"
          />
          <div className="flex basis-full flex-col gap-y-8 border-2 border-yellow-200">
            <p className="text-2xl font-semibold text-white lg:text-5xl">
              {movie?.name || movie?.original_title}
            </p>
            <p className="text-base italic text-[#d4d4d4] lg:text-lg">
              {movie?.tagline}
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-semibold text-white">Overview</p>
              <p className="text-lg text-white">{movie?.overview}</p>
            </div>
          </div>
        </div>
        <div className="mx-28 flex pt-[80vh] text-white">
          <div className="relative basis-3/4 border-2">
            <p className="mb-2 text-3xl font-semibold">Casts</p>
            <div className="flex w-[64vw] gap-x-2 overflow-x-scroll">
              {cast.map((person: any, i: number) => {
                return (
                  <div className="mb-1 rounded border-[1px] p-3 pb-0" key={i}>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${person?.profile_path}`}
                      width={5.2 * 20}
                      height={8 * 20}
                      layout="fixed"
                    />
                    <p>{person?.original_name}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="basis-1/4 border-2 pl-5">
            <>
              <p className="text-2xl font-semibold">Genre</p>
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
              <p className="mt-4 text-2xl font-semibold">Budget</p>
              <p className="text-[#eaeaea]">
                ${movie.budget.toLocaleString('en-US')}
              </p>
            </>
            <>
              <p className="mt-4 text-2xl font-semibold">Revenue</p>
              <p className="text-[#eaeaea]">
                ${movie.revenue.toLocaleString('en-US')}
              </p>
            </>
          </div>
        </div>
      </div>
    </>
  )
}
