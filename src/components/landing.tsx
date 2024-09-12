import { useEffect, useState } from "react";
import { NavBar } from "./navbar";


export function LandingPage(){
  const images = [
    '/images/img1.webp',
    '/images/img2.webp',
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the image every few seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]);


    return(
        <div className="flex h-screen w-full flex-col  items-center justify-center bg-gradient-to-tl from-darkcharcol from-10% to-slategreen to-75%">
          <NavBar/>
          <div className="container flex flex-col-reverse items-center lg:flex-row p-5">
            <div className=" text-white">
            <div className="flex flex-row justify-center items-end">
              <p className="font-Montserrat text-8xl font-extrabold italic">D3</p>
              <p className="text-6xl font-Montserrat font-semibold italic pr-5 pb-1">VELOP</p>
            </div>
              <p className="mt-2 text-md font-Poppins">
              Crafting the Future of Film Development
              </p>
              <p className="mt-2 text-xs font-Poppins">
              Advanced Tools for Film Creators, Built by Experts, Inspired by Tradition.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block px-4 py-2 text-lg font-medium text-white bg-steelblue  rounded-lg hover:bg-blue-700"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className=" flex w-full justify-center">
              <div className=" w-full h-auto rounded-lg overflow-auto">
              <img  
                  src={images[currentImageIndex]}
                  alt="Hero"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
    )
}