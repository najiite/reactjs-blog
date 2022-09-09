import SingleSidebarPost
 from "./SingleSidebarPost"
const SidebarPosts = ({title, posts}) => {
  return (
    <div className="mt-5">
        <h3 className="font-semibold mb-5">{title}</h3>
        { posts.map((post) => (
            <SingleSidebarPost key={post.id} post={post} />
          ))}
    </div>
  )
}

export default SidebarPosts