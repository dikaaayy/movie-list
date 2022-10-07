import type { NextPage } from 'next'
import Head from '../components/head/HeadSection'
import Rows from '../components/row/Rows'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="select-none bg-[#0a0a0a] font-netflixSans">
      <Head title={'Home'} />
      <Navbar />
      <Jumbotron />
      <Rows />
    </div>
  )
}

export default Home
