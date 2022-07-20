import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function NotFound() {
  const router = useRouter()
  const [time, setTime] = useState(6000)
  useEffect(() => {
    if (time !== 0) {
      setTimeout(() => {
        setTime(time - 1000)
      }, 1000)
    } else {
      setTimeout(() => {
        router.push('/')
      }, 400)
    }
  }, [time])
  return (
    <>
      <Head>
        <title>Page not found! | Movie List</title>
        <link
          rel="icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>
      <Navbar />
      <div className="flex h-screen w-screen flex-col items-center justify-center space-y-5 bg-[#0a0a0a] text-white">
        <p className="text-9xl">?</p>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold">Page not Found!</p>
          <p>Returning to main page in {time / 1000}</p>
        </div>
      </div>
    </>
  )
}
