import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import sanityClient from "../SanityClient";
const Search = ({searchterm}) => {
    
    const [searchresults, setSearchresults] = useState(null)
    useEffect(() => {
        sanityClient
            .fetch(
            `*[_type == "post"][title match "${searchterm}"]{
            _id,
            title,
            slug,
            }`
                )
                .then((data) => {setSearchresults(data)})
                .catch(console.error)
            
    }, [searchterm])
    if (searchresults === null)
    return(
      <></>
    )
  return (
    <>
     <div className={`m-5`}>
        { searchterm.length > 1 ? (<h4>Search results for "{searchterm}"</h4>): (<></>) }
        
        { searchresults.length === 0 && searchterm.length > 1 ? (<p>No results for "{searchterm}"</p>): (<></>) }

        <ul className="underline">
          { searchresults.map((result) => (
              <li className="py-2" key={result._id}><Link to={`/post/${result.slug.current}`}>{result.title}</Link></li>
              ))}
        </ul>
      </div>
    </>
  )
}

export default Search