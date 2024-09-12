import { useState } from "react";

export function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" text-white fixed top-0 left-0 w-full z-2 ">
      <div className="container mx-auto flex justify-end items-center p-4 rounded-b-md">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#" className="hover:text-steelblue">Home</a></li>
          <li><a href="#" className="hover:text-steelblue">About</a></li>
          <li><a href="#" className="hover:text-steelblue">Services</a></li>
          <li><a href="#" className="hover:text-steelblue">Contact</a></li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <img
                src="https://example.com/close-icon.png"  // Replace with the actual URL of your close icon
                alt="Open Menu"
                className="h-6 w-6"
              />
            ) : (
              <img
                src="https://example.com/hamburger-icon.png"  // Replace with the actual URL of your hamburger icon
                alt="Open Menu"
                className="h-6 w-6"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow transition-all duration-500 ease-in-out md:hidden  text-white`}
      >
        <ul className="flex justify-center space-x-8 text-lg">
          <li><a href="#" className="hover:text-steelblue">Home</a></li>
          <li><a href="#" className="hover:text-steelblue">About</a></li>
          <li><a href="#" className="hover:text-steelblue">Services</a></li>
          <li><a href="#" className="hover:text-steelblue">Contact</a></li>
        </ul>
      </div>
    </nav>
    )
    
}