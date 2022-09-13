
const SingleSidebarPost = ({post}) => {
  return (
    
    <div className="mr-10  hover:scale-110">
            <a href="/post">
              <img className="rounded-lg" src={post.mainImage.asset.url} alt={post.title}/>
              <div className="text-xl font-semibold my-5 hover:text-yellow-500">{post.title}</div>
            </a>
    </div>
  )
}

export default SingleSidebarPost