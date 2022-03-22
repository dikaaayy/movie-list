import type { NextPage } from 'next'
import Head from 'next/head'
import Row from '../components/Row'
import Jumbotron from '../components/Jumbotron'
import request from '../components/request'

const Home: NextPage = () => {
  return (
    <div className="h-[4000px] bg-black">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-auto h-16">
        <h1 className=" bg- text-4xl font-semibold text-red-600">navbar</h1>
      </div>
      <div>
        <Jumbotron />
      </div>
      <div>
        <Row title="Trending Now" fetchURL={request.getTrending} isLarge />
        <Row title="Top Rated" fetchURL={request.getTopRated} isLarge={false} />
        <Row
          title="Documentary"
          fetchURL={request.getDocumentaryMovie}
          isLarge={false}
        />
        <Row
          title="Romance"
          fetchURL={request.getRomanceMovie}
          isLarge={false}
        />
      </div>
    </div>
  )
}

export default Home
