//Components Import start
import Archive from "../components/Archive"
import Featured from "../components/Featured"
import Post from "../components/Post"
import ScrolltoTop from "../components/ScrolltoTop"
import SidebarPosts from "../components/SidebarPosts"
//components import end

import { useState, useEffect } from "react"
import sanityClient from "../SanityClient"

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"] | order(_createdAt desc){
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
			.then((data) => setPosts(data))
			.catch(console.error);
	}, []);

  return (
    <div>
      <Featured />
        <h3 className="text-4xl mx-5 lg:mx-10">Latest Posts</h3>
      <div className="lg:flex lg:flex-row">
          <div className="lg:basis-3/4 grid md:grid-cols-2 gap-10 m-5 lg:m-10">
            
              { posts.map((post) => (
                <Post key={post._id} post={post} />
              ))}
          </div>

        <div className="lg:basis-1/4 m-5 lg:my-10" >
            <Archive />
            <SidebarPosts title='Popular Posts' posts={posts} />
        </div>
      </div><ScrolltoTop />
    </div>
  )
}

export default Home