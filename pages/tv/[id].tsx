import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Casts from '../../components/movieDetails/Casts'
import TVDetails from '../../components/movieDetails/TVDetails'
import RecommendationRow from '../../components/movieDetails/RecommendationRow'
import Navbar from '../../components/Navbar'
import HeadSection from '../../components/head/HeadSection'

export const getServerSideProps = async (context: any) => {
  const { id } = context.params
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

  const recommendation = await fetch(
    'https://api.themoviedb.org/3/tv/' +
      id +
      '/recommendations?api_key=76ebb98bc55f9ac730ad21ae0ef1a116'
  ).then((res) => res.json())

  if (tvShow.success == false) {
    return {
      notFound: true,
    }
  }
  return {
    props: { tvShow, casts, recommendation },
  }
}

export default function Movies({ tvShow, casts, recommendation }: any) {
  const { cast } = casts
  // console.log(cast)
  return (
    <>
      {/* <title>{tvShow.name || tvShow.original_title} | Details </title> */}
      <HeadSection
        title={tvShow.name || tvShow.original_title}
        additional={'Details'}
      />
      <Navbar />
      <div className="relative h-fit select-none bg-[#0a0a0a] font-netflixSans">
        <div
          className="absolute mb-5 h-[75vh] w-full bg-cover bg-center blur-md brightness-50 grayscale"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${tvShow?.backdrop_path})`,
          }}
        />
        <div className="absolute z-20 mx-10 mt-24 flex flex-col md:mx-48 md:mt-32 md:flex-row md:space-x-10">
          {/*ratio gambar 5:8*/}
          <Image
            src={`https://image.tmdb.org/t/p/original/${tvShow?.poster_path}`}
            width={5 * 65}
            height={8 * 65}
            className="self-start rounded"
          />
          <div className="mt-8 flex basis-full flex-col gap-y-8 md:mt-0">
            <p className="text-center text-3xl font-semibold text-white md:text-left lg:text-5xl">
              {tvShow?.name || tvShow?.original_title}{' '}
              <span className="font-normal text-[#dfdede]">
                ({new Date(tvShow?.first_air_date).getFullYear()})
              </span>
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
        <div className="mx-10 flex flex-col pt-[120vh] text-white md:mx-24 md:flex-row md:pt-[80vh]">
          <div className="relative basis-3/4">
            <p className="mb-2 text-3xl font-semibold">Casts</p>
            <div className="flex gap-x-3 overflow-x-auto md:w-[65vw]">
              {cast.map((person: any, i: number) => {
                return <Casts person={person} key={i} />
              })}
            </div>
          </div>
          <div className="mt-5 pb-3 md:mt-0 md:basis-1/4 md:pl-5">
            <TVDetails tvShow={tvShow} />
          </div>
        </div>
        {recommendation.results.length !== 0 && (
          <div className="mx-5 mt-14 pb-10 md:mx-14 md:mt-28">
            <RecommendationRow
              title={'Similar Genre'}
              movies={recommendation.results}
            />
          </div>
        )}
      </div>
    </>
  )
}
