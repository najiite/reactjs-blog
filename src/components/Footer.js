import { Link } from "react-router-dom"
import { useMode } from "../ModeContext";
const Footer = () => {
  const {border} = useMode()
  return (
    
    <footer className={`border ${border} p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6`}>
        <span className="text-sm  sm:text-center">© 2022 <a href="/" className="hover:underline">React Blog</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
            <li>
                <Link to="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
            </li>
            <li>
                <Link to="/about" className="hover:underline">About</Link>
            </li>
        </ul>
    </footer>

  )
}

export default Footer