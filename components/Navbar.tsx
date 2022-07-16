import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const logo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/185px-Netflix_2015_logo.svg.png'
const user =
  'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'

export default function Navbar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 400) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])
  return (
    <>
      <div
        className={`fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-b from-[#0a0a0a] to-transparent px-6 py-4 transition-all duration-500 ease-in sm:px-14 ${
          show && 'bg-black'
        }`}
      >
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="netflix-logo"
              height={25}
              width={80}
              layout="fixed"
            />
          </a>
        </Link>
        <Image
          src={user}
          alt="user-logo"
          height={40}
          width={40}
          layout="fixed"
        />
      </div>
    </>
  )
}
