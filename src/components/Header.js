import { useState} from "react";
import { FaBars,FaMoon } from 'react-icons/fa';
import { Link } from "react-router-dom"
import { useMode } from "../ModeContext";

const Header = () => {
    const {mode, setMode} = useMode()
    const [navbarOpen, setNavbarOpen] = useState(false);
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
              <li className="nav-item">
                <button className="px-3 py-2 flex items-center text-lg" onClick={() => toggleMode()}><FaMoon></FaMoon></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header