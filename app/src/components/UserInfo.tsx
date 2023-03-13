import React, { ReactNode, useState } from 'react'
import Button from './Button'


export default function UserInfo() {

    return(

<form>
<h3 className="text-2xl font-bold text-eerie-black">Navn Navnesen</h3>

<div className="mb-6 w-11/12  ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">Name</label>
    <input type="email" id="disabled-input" aria-label="disabled input" className="bg-gray-50 border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed"   placeholder="Navn" required/>
  </div>
 
  <div className="mb-6 w-11/12  ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">Last name</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed " placeholder="Navnesen" required/>
  </div>

  <div className="mb-6 w-11/12  ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">Email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed " placeholder="navnnavnesen@stud.ntnu.no" required/>
  </div>

  <div className="mb-6 w-11/12  ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">Password</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed" placeholder="*******" required/>
  </div>

  <div className="mb-6 w-11/12  ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">New password</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed " placeholder="*******" required/>
  </div>

  
  
 <Button text="Submit changes"/>
</form>

    )
}