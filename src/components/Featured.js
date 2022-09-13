import { FaStar } from 'react-icons/fa'
import { useMode } from "../ModeContext";
const Featured = () => {
  const {border} = useMode()
  return (
      <>
      <div className="grid grid-cols-1 place-content-between bg-slate-500 bg-cover bg-no-repeat hover:bg-blend-overlay text-slate-100 p-2 mx-5 my-5 lg:m-10  w-auto lg:h-screen rounded-lg " style={{backgroundImage: `url(/images/eugen.jpg)`}}>
              <div className='lg:mx-5'>
                <p className=" flex items-center p-5 text-yellow-500 font-semibold italic"><FaStar /> &nbsp;Featured</p>
                <div className="text-3xl md:text-5xl  lg:text-6xl text-yellow-100 italic px-5 md:leading-loose font-semibold">Section 1.10.33 of "de Finibus Bonorum et Malorum"</div>
              </div>
              {/*
              <div className="flex items-center md:mt-40 lg:mx-5 px-5">
                  <img className="w-10 h-10 rounded-full mr-3 my-5 hover:scale-150" src='./images/profile.jpg' alt='profile' />
                  <div className="">
                      <strong>by Okeh Onajite</strong>
                      <p className="font-semibold text-yellow-500">08/09/2022</p>
                  </div>
              </div>
              */}
          
      </div>
      <div className={`mx-5 my-5 lg:m-10 border ${border}`}>

      </div>
    </>
  )
}

export default Featured