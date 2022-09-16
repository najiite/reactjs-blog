import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import sanityClient from "../SanityClient";
import { useMode } from "../ModeContext";
import Loading from "./Loading";
const Search = ({searchterm}) => {
    
    const {bg} = useMode()
    const [searchresults, setSearchresults] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        sanityClient
            .fetch(
            `*[_type == "post"][title match "${searchterm}"]{
            _id,
            title,
            slug,
            }`
                )
                .then((data) => {setSearchresults(data); setLoading(false)})
                .catch(console.error)
            
    }, [searchterm])
    if (searchresults === null)
    return(
      <></>
    )
  return (
    <>
    { loading ? (<Loading />):
    (
      <div className={`absolute px-5 lg:px-10 ${bg} w-full`}>
        { searchterm.length > 1 ? (<h4>Search results for "{searchterm}"</h4>): (<></>) }
        
        { searchresults.length === 0 && searchterm.length > 1 ? (<p>No results for "{searchterm}"</p>): (<></>) }

        <ul className="underline">
          { searchresults.map((result) => (
              <li className="py-2" key={result._id}><Link to={`/post/${result.slug.current}`}>{result.title}</Link></li>
              ))}
        </ul>
      </div>
      ) }
     
    </>
  )
}

export default Search