import React, { ReactNode, useState } from 'react'
import Button from './Button'


export default function UserInfo() {

    return (
        <>

            <div className="flex flex-col justify-center">
                <form className="flex flex-col justify-center mb-10 md:mb-72 h-fit">

                    <h3 className="text-2xl font-bold text-eerie-black flex flex-col justify-center items-center mt-5">Kari Nordmann</h3>


                    <div className="mb-6 w-96">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-eerie-black ">Name</label>
                        <input type="name" id="disabled-input" aria-label="disabled input" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed" disabled readOnly placeholder="Kari" required />
                    </div>

                    <div className="mb-6 w-96 ">
                        <label htmlFor="lname" className="block mb-2 text-sm font-medium text-eerie-black ">Last name</label>
                        <input type="name" id="lname" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed" disabled readOnly placeholder="Nordmann" required />
                    </div>

                    <div className="mb-6 w-96 ">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">Email</label>
                        <input type="email" id="email" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue w-full p-2.5 cursor-not-allowed block" disabled readOnly placeholder="karinordmann@stud.ntnu.no" required />
                    </div>


                </form>
            </div>

        </>
    )
}