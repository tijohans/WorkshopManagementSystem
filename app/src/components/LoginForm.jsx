import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookie from 'universal-cookie'
import DangerWarning from '../components/DangerWarning.jsx'


export default function LoginForm() {

    const [login, setLogin] = useState(true)

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        setError
    } = useForm();

    const onSubmit = async (userData) => {
        setLogin(true)
        try {
            const response = await axios.post('http://localhost:9003/api/login', {
              email: userData.email,
              password: userData.password
            })

            const token = response.data.token.split(' ')[1]

            const cookie = new Cookie()
            cookie.set('token', token)

            navigate('/userpage')
          } catch (error) {
            setLogin(false)
            if (error.response) {
              const { status, data } = error.response;
              if (status === 400 && data && data.err) {
                setError("email", { type: "manual", message: data.err });
              } else if (status === 401) {
                setError("email", { type: "manual", message: "Invalid email or password" });
              }
            }
            console.error(error);
          }
    }

    return (

        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="top-1 h-200 flex flex-col justify-center items-center space-y-10" 
            >
            <h2 className="text-3xl font-bold text-eerie-black md:text-5xl ">User Login</h2>
            <div className="mb-6 w-11/12 md:w-4/12 ">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-eerie-black ">Your email</label>
                <input
                    type="email"
                    id="email"
                    className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 "
                    placeholder="name@stud.ntnu.no"
                    required 
                    {...register("email", { required: true })} />
            </div>
            <div className="mb-6 w-11/12 md:w-4/12">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-eerie-black ">
                    Your password
                </label>
                <input
                    type="password"
                    id="password"
                    className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 "
                    required
                    {...register("password", { required: true })} />
            </div>
            {!login ? <DangerWarning text="Wrong username or password" /> : ''}
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:robin-egg-blue" />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
            </div>
            <p className="">Need help? Contact us blablabla.</p>
            <input type="submit" value="login" />
        </form>
    )
}