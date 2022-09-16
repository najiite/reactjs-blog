import { FaStar } from 'react-icons/fa'
import { useMode } from "../ModeContext";
import { useEffect,useState } from 'react';
import sanityClient from "../SanityClient"
import { Link } from 'react-router-dom'

const Featured = () => {
  const {border} = useMode()
  const [post, setPost]  = useState(null)
  
  useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post" &&  "Featured" in categories[]->title][0]{
          _id,
          _createdAt,
          title,
          slug,
          mainImage{
            asset->{
              _ref,
              url
            },
          },
          body,
          author->{
            name,
            image{
              asset->{
                _ref,
                url
                }, 
              },
            slug,
          },
        }`
			)
			.then((data) => {setPost(data)})
			.catch(console.error);
	}, []);
  if (post === null)
    return(
      <></>
    )
  return (
      <>
      <Link to={`/post/${post.slug.current}`}>

        <div className="grid grid-cols-1 place-content-between bg-slate-500 bg-cover bg-no-repeat hover:bg-blend-overlay text-slate-100  w-auto lg:h-screen" style={{backgroundImage:  `url(${post.mainImage.asset.url})` }}>
                <div className='lg:mx-5'>
                  <p className=" flex items-center p-5 text-yellow-500 font-semibold italic"><FaStar /> &nbsp;Featured</p>
                
                  <div className="text-3xl md:text-5xl  lg:text-6xl text-yellow-100 italic px-5 pb-10 md:leading-loose font-semibold">{post.title}</div>
                </div>
        </div>
      </Link>
      <div className={`mx-5 my-5 lg:m-10 border ${border}`}>

      </div>
    </>
  )
}

export default Featured