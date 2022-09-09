
const SingleSidebarPost = ({post}) => {
  return (
    
    <div className="mr-10">
            <a href="/post">
              <img className="rounded-lg" src="/images/eugen.jpg" alt={post.title}/>
              <div className="text-xl font-semibold my-5 hover:text-yellow-500">{post.title}</div>
            </a>
    </div>
  )
}

export default SingleSidebarPost