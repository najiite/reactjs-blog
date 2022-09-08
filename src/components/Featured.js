
const Featured = () => {
  return (
    <div className="grid grid-cols-1 place-content-between bg-cover bg-no-repeat  p-2 mx-5 my-5  w-auto h-screen" style={{backgroundImage: `url(/images/eugen.jpg)`}}>
      
            <div className="text-5xl m-4 text-slate-100  leading-loose">Section 1.10.33 of "de Finibus Bonorum et Malorum"</div>
            <div class="flex items-center ">
                <img className="w-10 h-10 rounded-full m-2" src='./images/profile.jpg' alt='profile' />
                <div className="text-slate-100">
                    <strong>by Okeh Onajite</strong>
                    <p>08/09/2022</p>
                </div>
            </div>
        
    </div>
  )
}

export default Featured