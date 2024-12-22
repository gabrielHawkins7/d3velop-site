import { useState, useEffect, useRef } from "react";
import { Navbar } from "./Nav";


export function Content(){

    const [showNavbar, setShowNavbar] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
      
        useEffect(() => {
          const handleScroll = () => {
            const scrollPosition = window.scrollY; // Current scroll position
            const threshold = 100; // Adjust this value to set the scroll threshold
            setShowNavbar(scrollPosition > threshold);
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup event listener
          };
        }, []);


    return(
        <>
        <div id="maincontent" ref={contentRef} className={`w-screen h-screen transition-opacity duration-1000 ${
                    showNavbar ? "opacity-100" : "opacity-0"
                }`}>
            <Navbar/>
           <div className="relative w-full h-80 bg-slate-800 overflow-hidden ">

            <div className="absolute left-0 top-0 z-30 w-2/3 h-full justify-items-center content-center text-stone-50">
                <div className="flex flex-row justify-center items-end">
                    <p className="font-Montserrat text-5xl font-semibold italic">D3</p>
                    <p className="text-4xl font-Montserrat font-medium italic pl-2">Contact Sheets</p>
              </div>
              <p className="font-Poppins pt-2"><span className="font-bold">PRESERVE</span> the moment <span className="font-bold">ORGANIZE</span> the chaos <span className="font-bold">SHOWCASE</span> the best</p>
              
            </div>
            <div className="absolute left-0 top-0 z-20 w-full h-full -translate-x-1/3 bg-gradient-to-r from-red-500 from-90% to-transparent to-100% -skew-x-[24deg]"/>
            <div className="absolute left-0 top-0 z-10 w-full h-80 justify-items-end overflow-hidden">
                <img className=" max-w-[800px] -translate-y-20 object-cover " src="ContactSheet.jpg"/>
            </div>
           </div>
        </div>
        </>
    )
}