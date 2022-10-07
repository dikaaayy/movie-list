import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const logo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/185px-Netflix_2015_logo.svg.png'
const user =
  'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'

export default function Navbar() {
  const [show, setShow] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const inputRef = useRef<any>(null)
  const router = useRouter()

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

  const submitHandler = (e: any) => {
    e.preventDefault()
    router.push(`/search?title=${inputRef?.current?.value}`)
  }
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
        <div className="flex items-center gap-x-5">
          {isSearchOpen ? (
            <>
              <form
                className="flex items-center gap-x-2"
                onSubmit={submitHandler}
              >
                <input
                  type="text"
                  className="bg-black py-1 px-3 text-sm text-white outline-[1px] placeholder:text-gray-400"
                  placeholder="Enter a title"
                  ref={inputRef}
                />
                <button
                  type="submit"
                  className="rounded p-1 hover:bg-[#171717]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="rounded p-1 hover:bg-[#171717]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </form>
            </>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="rounded p-1 text-white hover:bg-[#171717]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          )}
          <Image
            src={user}
            alt="user-logo"
            height={40}
            width={40}
            layout="fixed"
          />
        </div>
      </div>
    </>
  )
}
