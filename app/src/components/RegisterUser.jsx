import React from 'react'
import { useForm } from 'react-hook-form'

export default function UserForm(props) {

    return (
        <form className="flex flex-col justify-center items-center mb-16">
            <div>
                {props.toEdit ? <h1>Create a new user:</h1> : <h1>Edit user:</h1>}
            </div>
            <div className="mb-6 w-96">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-eerie-black ">First Name</label>
                <input name="firstname" type="text" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed" placeholder="Kari" required />
            </div>

            <div className="mb-6 w-96">
                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-eerie-black ">Last Name</label>
                <input name="lastname" type="text" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed" placeholder="Nordmann" required />
            </div>

            <div className="mb-6 w-96">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">Email</label>
                <input name="email" type="email" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed" placeholder="karinordmann@gmales.cx" required />
            </div>

            <div className="mb-6 w-96">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-eerie-black ">Password</label>
                <input name="password" type="password" className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 cursor-not-allowed" placeholder="" required />
            </div>

            <div className="flex flex-col justify-center items-center">
                <button>Submit</button>
            </div>

        </form>
    )
}
