

export function LandingPage(){
    return(
        <div className="bg-gradient-to-tl from-darkcharcol from-10% to-slategreen to-75% text-white min-h-screen flex items-center justify-center">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-16 mt-16">
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

            <div className="lg:w-1/2">
              <img
                src="https://source.unsplash.com/random"
                alt="todo"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
    </div>
    )
}