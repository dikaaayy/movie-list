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
      <div className={`navbar ${show && 'bg-black'}`}>
        <a href="">
          <img src={logo} alt="netflix logo" className="h-4 sm:h-7" />
        </a>
        <img src={user} alt="" className="h-7 sm:h-10" />
      </div>
    </>
  )
}
