import { useEffect, useState } from "react";


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
        <div className="flex w-screen items-center justify-center bg-gradient-to-tl from-darkcharcol from-10% to-slategreen to-75% text-white shadow-2xl">
          <div className="container mx-auto mt-16 flex max-h-full flex-col-reverse items-center justify-between px-8 py-16 lg:flex-row">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="flex flex-row items-end">
              <p className="text-9xl font-Montserrat font-extrabold italic ">D3</p>
              <p className="text-8xl font-Montserrat font-semibold italic ">VELOP</p>
              </div>
              <p className="mt-2 text-lg  font-Poppins sm:text-xl">
              Crafting the Future of Film Development
              </p>
              <p className="mt-2 text-xl font-Poppins sm:text-base">
              Advanced Tools for Film Creators, Built by Experts, Inspired by Tradition.
              </p>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block px-6 py-3 text-lg font-medium text-white bg-steelblue  rounded-lg hover:bg-blue-700"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className=" flex w-full justify-center pb-5 lg:pb-0 lg:pl-16">
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