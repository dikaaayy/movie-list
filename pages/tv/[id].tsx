import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

export const getServerSideProps = async (context: any) => {
  const { id } = context.params
  // const { title } = context.query
  const tvShow = await fetch(
    'https://api.themoviedb.org/3/tv/' +
      id +
      '?api_key=76ebb98bc55f9ac730ad21ae0ef1a116'
  ).then((res) => res.json())
  const casts = await fetch(
    'https://api.themoviedb.org/3/tv/' +
      id +
      '/credits?api_key=76ebb98bc55f9ac730ad21ae0ef1a116'
  ).then((res) => res.json())
  return {
    props: { tvShow, casts },
  }
}

export default function TV({ tvShow, casts }: any) {
  console.log(casts.cast)
  return (
    <>
      <Head>
        <title>
          {tvShow?.name || tvShow?.original_name || tvShow?.original_title} |
          Details{' '}
        </title>
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
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${tvShow?.backdrop_path})`,
          }}
        />
        <div className="absolute z-20 mx-10 mt-24 flex flex-col border-2 md:mx-48 md:flex-row md:space-x-10">
          {/*ratio gambar 5:8*/}
          <Image
            src={`https://image.tmdb.org/t/p/original/${tvShow?.poster_path}`}
            width={5 * 65}
            height={8 * 65}
            className="self-start"
          />
          <div className="flex basis-full flex-col gap-y-8 border-2 border-yellow-200">
            <p className="text-2xl font-semibold text-white lg:text-5xl">
              {tvShow?.original_title || tvShow?.original_title || tvShow?.name}
            </p>
            <p className="text-base italic text-[#d4d4d4] lg:text-lg">
              {tvShow?.tagline}
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-semibold text-white">Overview</p>
              <p className="text-lg text-white">{tvShow?.overview}</p>
            </div>
          </div>
        </div>
        <div className="mx-28 pt-[80vh] text-white">
          <div>
            <p className="text-2xl font-semibold">Genre:</p>
            <div className="flex gap-x-1">
              {tvShow.genres.map((genre: any, i: number, row: any) => {
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
          </div>
        </div>
      </div>
    </>
  )
}
