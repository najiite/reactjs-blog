import { toPlainText, toTimestring } from "../functions";

const Post = ({post}) => {
  return (
    <div className="border-b-2 border-slate-600 bg-white rounded">
            <a href={`/post/${post.slug.current}`}>
              <img className="rounded-lg" src={post.mainImage.asset.url} alt={post.title}/>
              <div className="text-2xl font-semibold m-3 mt-5 hover:text-yellow-500">{post.title}</div>
            </a>
            <div className="text-slate-700 m-3 ">{toPlainText(post.body).substring(0, 150)}...</div>
            <div className="flex items-center mt-5  mb-5">
                <img className="w-10 h-10 rounded-full m-5 hover:scale-150" src={post.author.image.asset.url} alt='profile' />
                <div className="">
                    <strong>{post.author.name}</strong><br></br>
                    <span className="text-slate-700 font-semibold">{toTimestring(post._createdAt)}</span>
                </div>
            </div>
    </div>
  )
}

export default Post