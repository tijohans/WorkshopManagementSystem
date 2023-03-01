import React from "react";

function Footer() {
  return (
    <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-ghost-white border-t border-slate-300 shadow md:flex md:items-center md:justify-between md:p-6  md:w-screen ">
      <h2 className="text-3xl font-bold text-eerie-black">What</h2>
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


