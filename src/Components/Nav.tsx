import { useEffect, useState } from "react";

export function Navbar(){
  
    return (
        <nav
          className={`relative top-0 w-full bg-slate-500 text-white p-4`}
        >
         <div className="hidden md:flex flex-row w-full justify-end items-center pr-4">
      <div className="flex flex-row w-full items-end">
        <a href="/"> 
          <p className="font-Montserrat text-3xl font-bold italic pl-2 pr-[4px]">D3</p>
        </a>
        <a href="/">
          <p className="font-Montserrat text-xl font-semibold italic">VELOP</p>
        </a>
        </div>
      </div>
      <div className="md:hidden flex flex-row w-full items-center">
        <div className="flex flex-row w-full items-end">
          <p className="font-Montserrat text-2xl font-extrabold italic pr-[4px]">D3</p>
          <p className="font-Montserrat text-lg font-extrabold italic">VELOP</p>
        </div>
      </div>
      
        </nav>
    );
  };
  