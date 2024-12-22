import { Content } from "./Components/Content";
import { Scroll } from "./Components/Scroll";

function App(){

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Background_01-2.webm"
        autoPlay
        loop
        muted
        poster="Thumbnail.jpg"
      >
       
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

      {/* Text Content */}
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center px-6">
        <div className=" text-stone-50">
              <div className="flex flex-row justify-center items-end">
                <p className="font-Montserrat text-8xl font-extrabold italic">D3</p>
                <p className="text-6xl font-Montserrat font-semibold italic pr-5 pb-1">VELOP</p>
              </div>
                <p className=" px-2 text-md lg:text-2xl font-Poppins">
                  The Darkroom of the Future
                </p>
              </div>
        </div>
      </div>
      {/* Scroll Down Button */}
      <Scroll/>
      
    </div>
</>

    
  )
}
export default App;