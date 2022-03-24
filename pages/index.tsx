import type { NextPage } from 'next'
import Head from 'next/head'
import Rows from '../components/Rows'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="select-none bg-[#0a0a0a] font-netflixSans">
      <Head>
        <title>Netflix Clone</title>
        <link
          rel="icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
        <meta
          name="description"
          content="Netflix Clone portfolio website made by Andika Yudhistira"
        />
      </Head>

      <Navbar />
      <div>
        <Jumbotron />
      </div>
      <div className="bg-[#0a0a0a]">
        <Rows />
      </div>
    </div>
  )
}

export default Home
