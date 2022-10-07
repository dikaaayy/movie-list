import Image from 'next/image'
import Link from 'next/link'
import HeadSection from '../../components/head/HeadSection'
import Navbar from '../../components/Navbar'
import SearchList from '../../components/search/SearchList'

export const getServerSideProps = async (context: any) => {
  const { title } = context.query

  const movie = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=76ebb98bc55f9ac730ad21ae0ef1a116&query=${title}`
  ).then((res) => res.json())

  const tv = await fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=76ebb98bc55f9ac730ad21ae0ef1a116&query=${title}`
  ).then((res) => res.json())

  const data = [...movie.results, ...tv.results]

  return {
    props: { data },
  }
}

export default function Search({ data }: any) {
  const sortedData = data.sort((a: any, b: any) => b.popularity - a.popularity)
  return (
    <>
      <HeadSection title={'Search'} />
      <div className="bg-[#0a0a0a]">
        <Navbar />
        <div className="flex flex-col items-center space-y-5 pt-28 md:ml-20 md:items-start">
          <p className="mb-5 ml-5 self-start text-4xl font-semibold text-white">
            Search results
          </p>
          {sortedData.map((result: any, i: any) => {
            return <SearchList result={result} key={i} />
          })}
        </div>
      </div>
    </>
  )
}
