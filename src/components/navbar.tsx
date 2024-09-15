import { useState } from "react";
import { Modal } from "./modal";
import ReactDOM from "react-dom";
import { createPortal } from 'react-dom';

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
    <nav className="fixed left-0 top-0 w-full text-white p-4 md:p-1 bg-shadowgray ">
      <div className="hidden md:flex flex-row w-full justify-end items-center pr-4">
      <div className="flex flex-row w-full items-end">
          <p className="font-Montserrat text-3xl font-extrabold italic pl-2 pr-[4px]">D3</p>
          <p className="font-Montserrat text-xl font-extrabold italic">VELOP</p>
        </div>
        <a href="#" className="hover:text-steelblue block p-4">About</a>
        <a
          className="inline-block px-4 py-2 text-md font-Poppins text-white border-2 rounded-lg hover:bg-DeepTeal">
          Studio
        </a>
      </div>
      <div className="md:hidden flex flex-row w-full items-center">
        <div className="flex flex-row w-full items-end">
          <p className="font-Montserrat text-2xl font-extrabold italic pr-[4px]">D3</p>
          <p className="font-Montserrat text-lg font-extrabold italic">VELOP</p>
        </div>
        <div className="md:hidden">
          {
            (!isOpen)?
            <img src={"burgermenu.svg"} onClick={()=>setIsOpen(true)} className="w-10 h-10" />
            :<img src={"close.svg"} onClick={()=>setIsOpen(false)} className="w-10 h-10" />

          }
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } md:hidden bg-shadowgray text-white overflow-hidden transition-all duration-500 ease-linear`}
      >
        <ul className="space-y-4 text-center py-4">
          <li><a href="#showcase" onClick={open} className="hover:text-steelblue block">Products</a></li>
          <li><a href="#" className="hover:text-steelblue block">About</a></li>
          <li><a href="#" className="hover:text-steelblue block">Contact</a></li>
        </ul>
      </div>
      
      
    </nav>
    )
    
}