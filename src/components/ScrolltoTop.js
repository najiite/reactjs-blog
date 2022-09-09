import {FaArrowUp} from  'react-icons/fa'

const ScrolltoTop = () => {
    const scrollTotop =() =>{
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  return (
    <div>
        <button id="to-top-button" onClick={() => scrollTotop()} title="Go To Top"
            className="fixed bottom-8 right-8 border-0 p-3 w-12 h-12 rounded-full bg-yellow-500 text-white text-2xl font-bold"><FaArrowUp /></button>
    </div>
  )
}

export default ScrolltoTop