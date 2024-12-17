import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'><CodeBracketIcon className='h-7 w-10'/></Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;