import Archive from "../components/Archive"
import ScrolltoTop from "../components/ScrolltoTop"
import SidebarPosts from "../components/SidebarPosts"
import {FaThumbsUp,FaThumbsDown, FaEye} from 'react-icons/fa'

const Post = () => {
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
      <div className="lg:flex lg:flex-row">
        <div className="lg:basis-3/4 m-5 lg:m-10">
          
          <img className="rounded-lg" src="/images/eugen.jpg" alt='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'/>
          <div className="text-2xl font-semibold m-3 mt-5 hover:text-yellow-500">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</div>
          <div className="flex justify-between">
            <div className="flex items-center mt-5  mb-5">
                <img className="w-10 h-10 rounded-full m-5 hover:scale-150" src='./images/profile.jpg' alt='profile' />
                <div className="">
                    <strong>by Okeh Onajite</strong>
                    <p className="text-slate-700 font-semibold">08/09/2022</p>
                </div>
            </div>
            <div className="flex items-center mt-5  mb-5 md:text-2xl">
                <FaEye /><span className="mx-2">500</span> 
                <button className="mx-5 text-blue-500"><FaThumbsUp /></button>
                 <button className="text-red-600"><FaThumbsDown /></button>
            </div>
          </div>
            <div className="font-josefin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam, sem non dignissim hendrerit, quam risus auctor lectus, porttitor mollis risus est sit amet nibh. Donec placerat aliquam placerat. Duis eget sollicitudin magna, eu dignissim odio. Vivamus hendrerit dui a nisi consectetur, at tristique diam vestibulum. Aliquam mollis pellentesque neque. Quisque pellentesque lorem id mollis efficitur. Donec nec velit a odio tempus pretium. Donec pretium sed elit eget sollicitudin. In vel turpis mi. Sed ornare erat nec enim lobortis, quis feugiat risus semper. Nullam sed dolor in felis iaculis pellentesque vitae vitae nisl. Aenean quis tellus rhoncus, mollis neque varius, malesuada augue.

                Nulla efficitur eros orci, eget gravida ex ornare ac. Nullam malesuada eleifend est ut malesuada. Nunc id laoreet ipsum, quis commodo ex. Fusce eleifend at sapien quis vehicula. Proin quis lectus at ex laoreet egestas. Nulla molestie leo in leo sodales, quis commodo nisi luctus. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pharetra elit vitae posuere dictum. Praesent tincidunt urna in diam tempor, eget aliquam turpis convallis. Quisque sed dui facilisis, varius nunc at, tincidunt risus. Proin tempor hendrerit massa ac mattis. In leo velit, placerat interdum sagittis ac, tempor et diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                Donec eu lacinia risus, non aliquet orci. Sed malesuada id dolor sit amet luctus. Maecenas elementum ipsum id diam interdum, id pharetra augue volutpat. Etiam rhoncus, nunc sit amet maximus varius, tortor mauris viverra elit, a gravida tortor nisl sit amet magna. Aenean lectus orci, tristique sed quam vitae, ultricies condimentum augue. Suspendisse lobortis purus massa, et vehicula purus fringilla ut. Vivamus et neque quam. Nullam sollicitudin dignissim porttitor. Mauris fermentum nunc nec suscipit tempor. Ut eget orci neque.

                Etiam auctor ultricies lorem non tempus. Integer lorem dolor, consequat pulvinar commodo suscipit, pretium auctor tortor. Donec sodales lobortis orci, in efficitur massa laoreet eu. Cras orci odio, vehicula vitae magna at, vulputate vestibulum purus. Donec faucibus euismod vestibulum. Phasellus sit amet lobortis purus, in facilisis ante. Praesent placerat egestas suscipit. Cras hendrerit risus ut purus auctor, vel suscipit lacus suscipit.

                Pellentesque laoreet, nunc at condimentum convallis, tellus risus cursus enim, in elementum sem velit at diam. Sed ipsum eros, interdum et iaculis sit amet, facilisis nec mi. Donec a accumsan sem, in sagittis ipsum. Vestibulum aliquam laoreet orci sed tincidunt. Nulla facilisi. Morbi ultrices odio non lectus ultrices fringilla. In vel erat sodales, volutpat dolor quis, suscipit odio. Pellentesque ornare sem quis efficitur lobortis. Fusce ultrices libero non vestibulum fringilla. Morbi tincidunt fringilla sem, sit amet mollis justo accumsan nec. Cras orci odio, elementum sit amet tristique ut, tempor vel nunc. Phasellus lacinia ante sit amet risus pretium, eu commodo ipsum posuere.
            </div>
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

export default Post