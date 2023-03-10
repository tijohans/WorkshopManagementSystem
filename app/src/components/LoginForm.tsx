import React, { ReactNode, useState } from 'react'
import Button from './Button'
import SmallButton from './SmallButton'

export default function LoginForm() {

    return (
        <body className="min-h-screen">
 
<form className="top-1 h-200 flex flex-col justify-center items-center space-y-10 ">
<h2 className="uppercase text-3xl font-bold text-eerie-black md:text-4xl ">User login</h2>
  <div className="mb-6 w-11/12 md:w-4/12 ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 " placeholder="name@stud.ntnu.no" required/>
  </div>
  <div className="mb-6 w-11/12 md:w-4/12">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-eerie-black ">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 " required/>
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:robin-egg-blue " required/>
    </div>
    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
  </div>
 <Button text="Login"/>
 <p className="">Need help? Contact us blablabla.</p>
</form>
   
    </body>
    )

}
