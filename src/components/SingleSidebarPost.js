
import { Link } from 'react-router-dom'
const SingleSidebarPost = ({post}) => {
  return (
    
    <div className="mr-10">
            <Link to={`/post/${post.slug.current}`}>
              <img className="rounded-lg" src={post.mainImage.asset.url} alt={post.title}/>
              <div className="text-xl font-semibold my-5 hover:text-yellow-500">{post.title}</div>
            </Link>
    </div>
  )
}

export default SingleSidebarPost