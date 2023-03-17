import React, { ReactNode, useState } from 'react'
import Button from './Button'
import SmallButton from './SmallButton'
import { useForm } from 'react-hook-form';


export default function LoginForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  
  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) { // getItem can return actual value or null
      if (userData.password === data.password) {
        console.log(userData.name + " You Are Successfully Logged In");
      } else {
        console.log("Email or Password doesn't match");
      }
    } else {
      console.log("Email or Password doesn't match.");
    }
  };

    return (
       
      <form className="top-1 h-200 flex flex-col justify-center items-center space-y-10" onSubmit={handleSubmit((data) => console.log(data))}>
        <h2 className="text-3xl font-bold text-eerie-black md:text-4xl ">User Login</h2>
          <div className="mb-6 w-11/12 md:w-4/12 ">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">Your email</label>
            <input type="email" id="email" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 " placeholder="name@stud.ntnu.no" required {...register("email", { required: true })}/>
          </div>
          <div className="mb-6 w-11/12 md:w-4/12">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-eerie-black ">Your password</label>
            <input type="password" id="password" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 " required {...register("password")}/>
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:robin-egg-blue " required/>
            </div>
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
          </div>
         <Button text="Login" link="../userpage"/>
         <p className="">Need help? Contact us blablabla.</p>
      </form>
   
    
    )
}
