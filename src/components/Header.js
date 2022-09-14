import { useState} from "react";
import { FaBars,FaMoon,FaSistrix } from 'react-icons/fa';
import { Link } from "react-router-dom"
import { useMode } from "../ModeContext"
import Search from "./Search";

const Header = () => {
    const {mode, setMode} = useMode()
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [searchterm, setSearchterm] = useState('')
    const toggleMode = () =>{
      (mode === 'light' ? (setMode('dark')) :  (setMode('light')) )
    }
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            <a
              className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-3xl uppercase"
              href="/"
            >
             Blog
            </a>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars className="" />
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
              <li className="nav-item">
              <Link className="px-3 py-2 flex items-center text-lg uppercase font-semibold leading-snug  hover:text-yellow-500 hover:scale-110" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="px-3 py-2 flex items-center text-lg uppercase font-semibold leading-snug hover:text-yellow-500 hover:scale-110" to="about">About</Link>
              </li>
              <li>
                <div className="relative md:block">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <FaSistrix className='w-5 h-5 text-gray-500'/>
                  </div>
                  <input type="text" id="search-navbar" value={searchterm} onChange={(e) => {setSearchterm(e.target.value)}} className=" appearance-none block p-2 pl-10 w-full bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:border-yellow-500"  placeholder="Search the blog..." />
                </div>
              </li>
              <li className="nav-item">
                <button className="px-3 py-2 flex items-center text-lg" onClick={() => toggleMode()}><FaMoon></FaMoon></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Search searchterm={searchterm}/>
    </>
  )
}

export default Header