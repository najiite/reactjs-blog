
const Post = ({post}) => {
  return (
    <div className="border-b-2 border-slate-600 bg-white rounded">
            <a href="/post">
              <img className="rounded-lg" src="/images/eugen.jpg" alt={post.title}/>
              <div className="text-2xl font-semibold m-3 mt-5 hover:text-yellow-500">{post.title}</div>
            </a>
            <div className="text-slate-700 m-3 ">{ post.post.substring(0, 100)} ...</div>
            <div className="flex items-center mt-5  mb-5">
                <img className="w-10 h-10 rounded-full m-5 hover:scale-150" src='./images/profile.jpg' alt='profile' />
                <div className="">
                    <strong>by Okeh Onajite</strong>
                    <p className="text-slate-700 font-semibold">08/09/2022</p>
                </div>
            </div>
    </div>
  )
}

export default Post