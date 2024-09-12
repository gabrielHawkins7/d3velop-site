import { useState } from "react";

export function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed left-0 top-0 w-full flex justify-end text-white ">
      <button>Click</button>
    </nav>
    )
    
}