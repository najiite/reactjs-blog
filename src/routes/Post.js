import Archive from "../components/Archive"
import ScrolltoTop from "../components/ScrolltoTop"
import SidebarPosts from "../components/SidebarPosts"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import sanityClient from "../SanityClient"
import {PortableText} from '@portabletext/react'
import {toTimestring} from '../functions'
import { useMode } from "../ModeContext";

const Post = () => {
  let params = useParams()
  const {border} = useMode()
  const [post, setPost]  = useState(null)
  const [title, setTitle] = useState('')
  const [recentposts, setrecentPosts] = useState([])
  useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"] | order(_createdAt desc)[0..3]{
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
			.then((data) => setrecentPosts(data))
			.catch(console.error);
	}, []);
  
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
          categories[]->{title, _id},
        }`
			)
			.then((data) => {setPost(data); setTitle(data.title)})
			.catch(console.error);
	}, [params.slug]);
  document.title = title
  if (post === null)
    return(
      <><img className="motion-safe:animate-[spin_2s_linear_infinite]" src='/images/loading.png' alt='loading' /></>
    )
  return (
    
    <div>
      <div className="lg:flex lg:flex-row">
        <div className="lg:basis-3/4 m-5 lg:m-10">
          <div className="text-4xl font-semibold m-3">{post.title}</div>
          <img className="rounded-lg" src={post.mainImage.asset.url} alt={post.title} />
          <div className="flex justify-between">
            <div className="flex items-center mt-5  mb-5">
                <img className="w-10 h-10 rounded-full m-5 hover:scale-150" src={post.author.image.asset.url} alt='profile' />
                <div className="">
                    <strong>{post.author.name}</strong>
                    <br></br>
                    <span className="opacity-60 font-semibold">{toTimestring(post._createdAt)}</span>
                </div>
            </div>
            <div className="flex items-center mt-5  mb-5 md:text-2xl">
            { post.categories.map((cat) => (
              <span key={cat._id} className={`text-lg border border-2 rounded-lg px-2 m-2 border-dotted ${border}`}>{cat.title}</span>
              ))}
            </div>
          </div>
            <div className="text-lg">
              <PortableText value={post.body}/>
            </div>
        <ScrolltoTop />
        </div>

        <div className="lg:basis-1/4 m-5 lg:my-10" >
            <Archive />
            <SidebarPosts title='Recent Posts' posts={recentposts} />
        </div>
      </div>
    </div>
  )
}

export default Post