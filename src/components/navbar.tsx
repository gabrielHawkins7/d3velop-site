import { useState } from "react";

export function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    const open =  () =>{
      if(isOpen){
        setIsOpen(false);
      }else{
        setIsOpen(true);
      }
    }

  return (
    <nav className="fixed left-0 top-0 w-full text-white p-2 bg-shadowgray md:bg-transparent">
      <div className="md:hidden flex flex-row w-full">
        <div className="flex flex-row w-full items-end">
        <p className="font-Montserrat text-md font-extrabold italic pr-[2px]">D3</p>
        <p className="font-Montserrat text-sm font-extrabold italic">VELOP</p>
        </div>
        <div className="md:hidden">
          <button onClick={open}>Menu</button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } md:hidden bg-shadowgray text-white overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="space-y-4 text-center py-4">
          <li><a href="#" className="hover:text-blue-400 block">Home</a></li>
          <li><a href="#" className="hover:text-blue-400 block">About</a></li>
          <li><a href="#" className="hover:text-blue-400 block">Services</a></li>
          <li><a href="#" className="hover:text-blue-400 block">Contact</a></li>
        </ul>
      </div>
      
      
    </nav>
    )
    
}