import React from "react";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 z-20 w-full p-4 bg-ghost-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6  md:w-screen ">
      <h2 className="text-3xl font-bold">Logo here</h2>
      <p>What to put here?</p>
      <div>
      <p className="font-bold">Visit us:</p>
      <address className="address">Teknologivegen 22, 2815 Gjøvik</address>
      </div>
    </div>
  );
}

export default Footer;


