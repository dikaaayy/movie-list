import type { NextPage } from 'next'
import Head from 'next/head'
import Rows from '../components/Rows'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'
import Row from '../components/Row'

const Home: NextPage = () => {
  return (
    <div className="select-none bg-black">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div>
        <Jumbotron />
      </div>
      <div className="bg-black">
        <Rows />
      </div>
    </div>
  )
}

export default Home
