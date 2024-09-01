import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import {motion} from 'framer-motion'
import gsap, { Power4 } from "gsap";

const Navbar = ({ toggleNavbar, isNavbarActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative flex justify-between items-center p-4 sm:hidden">
        <div>
          <a className="font-bebas-neue text-3xl text-zinc-200">KIRAN CHAWDA</a>
        </div>
        <button
          className="block p-2 pt-0 relative"
          onClick={() => {
            toggleMenu();
            toggleNavbar();
          }}
        >
          <span
            className={`block w-100vw h-0.5 bg-zinc-200 transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
            }`}
          />
          <span
            className={`block w-8 h-0.5 bg-zinc-200 my-1 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-8 h-0.5 bg-zinc-200 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
            }`}
          />
        </button>
      </div>
      <div className="hidden sm:flex justify-between text-lg font-montserrat gap-5 text-zinc-200 p-6">
        <a className="font-bebas-neue text-3xl">KIRAN CHAWDA</a>
        <div className="flex gap-6">
          {["About", "Gallery"].map((item, index) => (
            <a href="#test" key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
      {isNavbarActive && <div className=" bg-zinc-950">
        {/* <div className="flex justify-center">
          <img src={LS} alt="LS"  className="rounded-sm w-56 rotate-90"/>
        </div> */}
        <div className="font-bebas-neue text-zinc-200 pt-44 p-4">
          {["About", "Gallery"].map((item, index)=>(
           <div className=" leading-none ">
            <a className="navItem text-7xl tracking-tight">{item}</a></div>
          ))}
        </div>
        <hr />
        <div className="font-montserrat text-zinc-200 p-4">
          {["Instagram", "Facebook", "Mail"].map((item, index)=> (
            <p className="text-2xl">{item}</p>
          ))}
        </div>
        <div className="absolute bottom-0 font-bebas-neue text-zinc-200 leading-none p-4 pb-0">
         {"KIRAN CHAWDA".split("").map((item, index)=> (
          <motion.span
          initial={{y:"100%"}}
          animate={{y:"0"}}
          transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02}} className="text-[22vw] leading-none inline-block tracking-tight">{item}</motion.span>
         ))} 
        </div>
      </div> }
    </>
  );
};

export default Navbar;
