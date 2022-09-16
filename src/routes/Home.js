//Components Import start
import Archive from "../components/Archive"
import Featured from "../components/Featured"
import Post from "../components/Post"
import ScrolltoTop from "../components/ScrolltoTop"
import Loading from "../components/Loading"
//components import end

import { useState, useEffect } from "react"
import sanityClient from "../SanityClient"

const Home = () => {
  document.title = 'Ai Blog'
  const noOfPostPerPage = 2
  const [posts, setPosts] = useState([])
  const [ref2, setRef2] = useState(1)
  const [noOfPosts, setnoOfPosts] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      sanityClient
          .fetch(
              `count(*[_type == "post"])`
  ).then((data) => {
    setnoOfPosts(data);
    })
  .catch(console.error);


  }, [noOfPosts]);
  
  useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"] | order(_createdAt desc)[0..1]{
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
			.then((data) => {setPosts(data);
        setRef2(ref2+noOfPostPerPage);
        setLoading(false);
      })
			.catch(console.error);
	}, []);

  const loadMore =  async () => {
    await sanityClient.fetch(
        `*[_type == "post"] | order(_createdAt desc)[0..${ref2}]{
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
   ).then((data) => {
      setPosts(data);
      setRef2(ref2+noOfPostPerPage);
      })
  .catch(console.error);
    
    
  }

  return (
    <>
    { loading ? (<Loading /> ):
    (
      <div>
        <Featured />
          <h3 className="text-4xl mx-5 lg:mx-10">Latest Posts</h3>
        <div className="lg:flex lg:flex-row">
            <div className="lg:basis-3/4 grid md:grid-cols-2 gap-10 m-5 lg:m-10">
                { posts.map((post) => (
                    <Post key={post._id} post={post} />
                  ))}
                  { noOfPosts === posts.length? (<></>):(
                    <div className="place-content-center">
                      <button onClick={()=> loadMore()} className="rounded-lg border border-yellow-500  px-20 py-3 hover:text-white hover:bg-yellow-500">Load older posts</button>
                    </div>)
                  }
            </div>

            <div className="lg:basis-1/4 m-5 lg:my-10" >
                <Archive />
            </div>
        </div>
        <ScrolltoTop />
      </div>
    )}
    </>
  )
}

export default Home