import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full mt-5 p-4 bg-ghost-white border-t border-slate-300 shadow md:flex md:items-center md:justify-between md:p-6  md:w-screen ">
      <Link className="hover:underline hover:underline-offset-8 hover:text-blue-500" to='/termsofservice'>Terms of Service</Link>
      <div>
        <p className="font-bold text-eerie-black">Contact us:</p>
        <a className=" text-eerie-black  transition ease-in-out hover:delay-50 duration-500 hover:text-plum  hover:underline underline-offset-4 " href="tel:123-456-7890">123-456-7890  </a>
      </div>
      <div>
        <p className="font-bold text-eerie-black">Visit us:</p>
        <address className="text-eerie-black">Teknologivegen 22, 2815 Gjøvik</address>
      </div>
    </footer>
  );
}

export default Footer;


