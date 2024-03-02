import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" w-[70vw] mt-[1.5rem] mx-auto ">
      <ul className=" flex w-[100%] gap-3 ">
        <li >
          <Link className=" border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]" to="/">Home</Link>
        </li>
        <li>
          <Link className="border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]" to="/about">More About Me</Link>
          
        </li>
        <li>
        <Link className="border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]" to="/Projects">Projects</Link>
          
        </li>
        <Link className="border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]" to="/lets-talk">Let's Talk</Link>
      </ul>
    </nav>
  );
}

export default Navbar;