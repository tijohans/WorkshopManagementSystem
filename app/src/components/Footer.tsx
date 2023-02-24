import React from "react";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 z-20 w-full p-4 bg-ghost-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6  md:w-screen ">
      <h2 className="text-3xl font-bold text-slate-700">What</h2>
      <div>
      <p className="font-bold text-slate-600">Contact us:</p>
      <a className="transition text-slate-600 hover:text-black duration-150 ease-in-out" href="tel:123-456-7890">123-456-7890  </a>
      </div>
      <div>
      <p className="font-bold text-slate-600">Visit us:</p>
      <address className="text-slate-600">Teknologivegen 22, 2815 Gjøvik</address>
      </div>
    </div>
  );
}

export default Footer;


