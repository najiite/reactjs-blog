import Archive from "../components/Archive"
import ScrolltoTop from "../components/ScrolltoTop"
//import SidebarPosts from "../components/SidebarPosts"
import {FaThumbsUp,FaThumbsDown} from 'react-icons/fa'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import sanityClient from "../SanityClient"
import {PortableText} from '@portabletext/react'
import {toTimestring} from '../functions'

const Post = () => {
  let params = useParams()
  const [post, setPost]  = useState(null)
  useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"][slug.current == "${params.slug}"][0]{
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
			.then((data) => setPost(data))
			.catch(console.error);
	}, [params.slug]);
  if (post === null)
    return(
      <><img className="motion-safe:animate-[spin_2s_linear_infinite]" src='/images/loading.png' alt='loading' /></>
    )
  return (
    
    <div>
      <div className="lg:flex lg:flex-row">
        <div className="lg:basis-3/4 m-5 lg:m-10">
          
          <img className="rounded-lg" src={post.mainImage.asset.url} alt={post.title} />
          <div className="text-2xl font-semibold m-3 mt-5 hover:text-yellow-500">{post.title}</div>
          <div className="flex justify-between">
            <div className="flex items-center mt-5  mb-5">
                <img className="w-10 h-10 rounded-full m-5 hover:scale-150" src={post.author.image.asset.url} alt='profile' />
                <div className="">
                    <strong>{post.author.name}</strong>
                    <p className="text-slate-700 font-semibold">{toTimestring(post._createdAt)}</p>
                </div>
            </div>
            <div className="flex items-center mt-5  mb-5 md:text-2xl">
                <button className="mx-5 text-blue-500"><FaThumbsUp /></button>
                 <button className="text-red-600"><FaThumbsDown /></button>
            </div>
          </div>
            <div className="text-lg">
              <PortableText value={post.body}/>
            </div>
        <ScrolltoTop />
        </div>

        <div className="lg:basis-1/4 m-5 lg:my-10" >
            <Archive />
        </div>
      </div>
    </div>
  )
}

export default Post