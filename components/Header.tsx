import Link from "next/link"
import Navbar from "./Navbar"
import Image from "next/image"

const Header = () => {
  return (
    <header
    className={`flexCenter max-container padding-container relative py-5 lg:py-10`}
  >
    <div className="absolute w-full padding-container">
    <Link className="z-50" href="/">
      <Image src="/logo.webp" alt="logo" width={40} height={29} />
    </Link>
    </div>
    
      <Navbar />
      {/* <div className="flexCenter flex-shrink-0">
        <button className="regular-12 xl:regular-16 flexCenter lg:rounded:xl rounded-lg bg-primary-70 p-2 transition-colors hover:bg-primary-90 lg:p-3">
          Commander un PC
        </button>
      </div> */}

      {/* <button className="lg:hidden h-full p-2" onClick={toggleMenu}>
        <div className='flexCenter flex-col gap-[8px]'>
          <div className={`h-[2px] w-[30px] rounded-full bg-white origin-center transition-transform ${isOpen ? 'translate-y-[5px] rotate-45' : ''}`}></div>
          <div className={`h-[2px] w-[30px] rounded-full bg-white ${isOpen ? 'hidden' : ''}`}></div>
          <div className={`h-[2px] w-[30px] rounded-full bg-white origin-center transition-transform ${isOpen ? 'translate-y-[-4px] -rotate-45' : ''}`}></div>
        </div>
      </button> */}
    {/* <div
        className={`fixed inset-0 z-30 bg-gray-80 transition-all lg:hidden ${isOpen ? 'bg-opacity-70 pointer-events-all' : 'bg-opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div> */}
  </header>
    
  )
}

export default Header