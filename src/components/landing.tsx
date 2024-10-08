import { useEffect, useState } from "react";
import { NavBar } from "./navbar";


export function LandingPage(){
  const images = [
    'https://images.unsplash.com/photo-1616093708407-8d93651b2b04?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1702942568346-ae74cfeee7bb?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1556130293-32c94f521550?q=80&w=2906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
          <div className="container flex h-auto flex-col-reverse items-center p-5 md:flex-row">
            <div className=" text-white">
              <div className="flex flex-row justify-center items-end">
                <p className="font-Montserrat text-8xl font-extrabold italic">D3</p>
                <p className="text-6xl font-Montserrat font-semibold italic pr-5 pb-1">VELOP</p>
              </div>
                <p className="mt-2 px-2 text-md lg:text-lg font-Poppins">
                Crafting the Future of Film Development
                </p>
                <p className="mt-2 px-2 text-xs lg:text-md font-Poppins">
                Advanced Tools for Film Creators, Built by Experts, Inspired by Tradition.
                </p>
                <div className="mt-8">
                  <a
                    href="#showcase"
                    className="inline-block px-4 py-2 text-lg font-medium text-white bg-steelblue  rounded-lg hover:bg-DeepTeal"
                  >
                    Get Started
                  </a>
              </div>
            </div>
            <div className=" flex h-auto justify-center items-center p-5">
              <div className=" h-full rounded-lg overflow-auto">
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