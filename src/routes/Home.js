import Archive from "../components/Archive"
import Featured from "../components/Featured"
import Post from "../components/Post"
import ScrolltoTop from "../components/ScrolltoTop"
import SidebarPosts from "../components/SidebarPosts"

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus integer. Proin sed libero enim sed. Vitae ultricies leo integer malesuada nunc vel. Gravida rutrum quisque non tellus orci ac auctor augue. Duis ultricies lacus sed turpis tincidunt id. Nisi porta lorem mollis aliquam ut. Eget est lorem ipsum dolor. Consequat id porta nibh venenatis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Purus semper eget duis at tellus at urna. Blandit cursus risus at ultrices. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Eros in cursus turpis massa. Pharetra pharetra massa massa ultricies mi. Donec ultrices tincidunt arcu non. Praesent tristique magna sit amet purus gravida quis. Vel orci porta non pulvinar neque laoreet suspendisse. Faucibus pulvinar elementum integer enim neque volutpat ac. Pulvinar neque laoreet suspendisse interdum consectetur. Aliquet sagittis id consectetur purus ut. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia.',
      author: 'Okeh Onajite',
      created: '10:35 AM, 08/09/2022',
    },
    {
      id: 2,
      title: 'Dos porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus integer. Proin sed libero enim sed. Vitae ultricies leo integer malesuada nunc vel. Gravida rutrum quisque non tellus orci ac auctor augue. Duis ultricies lacus sed turpis tincidunt id. Nisi porta lorem mollis aliquam ut. Eget est lorem ipsum dolor. Consequat id porta nibh venenatis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Purus semper eget duis at tellus at urna. Blandit cursus risus at ultrices. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Eros in cursus turpis massa. Pharetra pharetra massa massa ultricies mi. Donec ultrices tincidunt arcu non. Praesent tristique magna sit amet purus gravida quis. Vel orci porta non pulvinar neque laoreet suspendisse. Faucibus pulvinar elementum integer enim neque volutpat ac. Pulvinar neque laoreet suspendisse interdum consectetur. Aliquet sagittis id consectetur purus ut. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia.',
      author: 'Okeh Onajite',
      created: '10:35 AM, 08/09/2022',
    },
    {
      id: 3,
      title: 'Que porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus integer. Proin sed libero enim sed. Vitae ultricies leo integer malesuada nunc vel. Gravida rutrum quisque non tellus orci ac auctor augue. Duis ultricies lacus sed turpis tincidunt id. Nisi porta lorem mollis aliquam ut. Eget est lorem ipsum dolor. Consequat id porta nibh venenatis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Purus semper eget duis at tellus at urna. Blandit cursus risus at ultrices. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Eros in cursus turpis massa. Pharetra pharetra massa massa ultricies mi. Donec ultrices tincidunt arcu non. Praesent tristique magna sit amet purus gravida quis. Vel orci porta non pulvinar neque laoreet suspendisse. Faucibus pulvinar elementum integer enim neque volutpat ac. Pulvinar neque laoreet suspendisse interdum consectetur. Aliquet sagittis id consectetur purus ut. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia.',
      author: 'Okeh Onajite',
      created: '10:35 AM, 08/09/2022',
    },
    {
      id: 4,
      title: 'Wes porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus integer. Proin sed libero enim sed. Vitae ultricies leo integer malesuada nunc vel. Gravida rutrum quisque non tellus orci ac auctor augue. Duis ultricies lacus sed turpis tincidunt id. Nisi porta lorem mollis aliquam ut. Eget est lorem ipsum dolor. Consequat id porta nibh venenatis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Purus semper eget duis at tellus at urna. Blandit cursus risus at ultrices. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Eros in cursus turpis massa. Pharetra pharetra massa massa ultricies mi. Donec ultrices tincidunt arcu non. Praesent tristique magna sit amet purus gravida quis. Vel orci porta non pulvinar neque laoreet suspendisse. Faucibus pulvinar elementum integer enim neque volutpat ac. Pulvinar neque laoreet suspendisse interdum consectetur. Aliquet sagittis id consectetur purus ut. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia.',
      author: 'Okeh Onajite',
      created: '10:35 AM, 08/09/2022',
    },
    {
      id: 5,
      title: 'Nu porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus integer. Proin sed libero enim sed. Vitae ultricies leo integer malesuada nunc vel. Gravida rutrum quisque non tellus orci ac auctor augue. Duis ultricies lacus sed turpis tincidunt id. Nisi porta lorem mollis aliquam ut. Eget est lorem ipsum dolor. Consequat id porta nibh venenatis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Purus semper eget duis at tellus at urna. Blandit cursus risus at ultrices. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Eros in cursus turpis massa. Pharetra pharetra massa massa ultricies mi. Donec ultrices tincidunt arcu non. Praesent tristique magna sit amet purus gravida quis. Vel orci porta non pulvinar neque laoreet suspendisse. Faucibus pulvinar elementum integer enim neque volutpat ac. Pulvinar neque laoreet suspendisse interdum consectetur. Aliquet sagittis id consectetur purus ut. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia.',
      author: 'Okeh Onajite',
      created: '10:35 AM, 08/09/2022',
    },
  ]
  const posts3 = [
    {
      id: 1,
      title: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus integer. Proin sed libero enim sed. Vitae ultricies leo integer malesuada nunc vel. Gravida rutrum quisque non tellus orci ac auctor augue. Duis ultricies lacus sed turpis tincidunt id. Nisi porta lorem mollis aliquam ut. Eget est lorem ipsum dolor. Consequat id porta nibh venenatis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Purus semper eget duis at tellus at urna. Blandit cursus risus at ultrices. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Eros in cursus turpis massa. Pharetra pharetra massa massa ultricies mi. Donec ultrices tincidunt arcu non. Praesent tristique magna sit amet purus gravida quis. Vel orci porta non pulvinar neque laoreet suspendisse. Faucibus pulvinar elementum integer enim neque volutpat ac. Pulvinar neque laoreet suspendisse interdum consectetur. Aliquet sagittis id consectetur purus ut. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia.',
      author: 'Okeh Onajite',
      created: '10:35 AM, 08/09/2022',
    },
    {
      id: 2,
      title: 'Dos porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus integer. Proin sed libero enim sed. Vitae ultricies leo integer malesuada nunc vel. Gravida rutrum quisque non tellus orci ac auctor augue. Duis ultricies lacus sed turpis tincidunt id. Nisi porta lorem mollis aliquam ut. Eget est lorem ipsum dolor. Consequat id porta nibh venenatis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Purus semper eget duis at tellus at urna. Blandit cursus risus at ultrices. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Eros in cursus turpis massa. Pharetra pharetra massa massa ultricies mi. Donec ultrices tincidunt arcu non. Praesent tristique magna sit amet purus gravida quis. Vel orci porta non pulvinar neque laoreet suspendisse. Faucibus pulvinar elementum integer enim neque volutpat ac. Pulvinar neque laoreet suspendisse interdum consectetur. Aliquet sagittis id consectetur purus ut. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia.',
      author: 'Okeh Onajite',
      created: '10:35 AM, 08/09/2022',
    },
    {
      id: 3,
      title: 'Que porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing at in tellus integer. Proin sed libero enim sed. Vitae ultricies leo integer malesuada nunc vel. Gravida rutrum quisque non tellus orci ac auctor augue. Duis ultricies lacus sed turpis tincidunt id. Nisi porta lorem mollis aliquam ut. Eget est lorem ipsum dolor. Consequat id porta nibh venenatis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Purus semper eget duis at tellus at urna. Blandit cursus risus at ultrices. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Eros in cursus turpis massa. Pharetra pharetra massa massa ultricies mi. Donec ultrices tincidunt arcu non. Praesent tristique magna sit amet purus gravida quis. Vel orci porta non pulvinar neque laoreet suspendisse. Faucibus pulvinar elementum integer enim neque volutpat ac. Pulvinar neque laoreet suspendisse interdum consectetur. Aliquet sagittis id consectetur purus ut. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia.',
      author: 'Okeh Onajite',
      created: '10:35 AM, 08/09/2022',
    },
  ]
  return (
    <div>
      <Featured />
      <div className="lg:flex lg:flex-row">
        <div className="lg:basis-3/4 grid md:grid-cols-2 gap-10 m-5 lg:m-10">
          { posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        <ScrolltoTop />

        </div>

        <div className="lg:basis-1/4 m-5 lg:my-10" >
            <Archive />
            <SidebarPosts title='Popular Posts' posts={posts3} />
          </div>
      </div>
    </div>
  )
}

export default Home