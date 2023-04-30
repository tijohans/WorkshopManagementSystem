import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DangerWarning from '../components/Errors/DangerWarning.jsx'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/authContext.jsx'
import jwt_decode from 'jwt-decode'
import Button from '../components/Button.jsx'

const defaultTool = {
    id: "loading",
    name: "name",
    imageurl: "imageurl",
    description: "description",
    broken: false,
    dangerous: false,
};

export default function ToolPage() {
    const [tool, setTool] = useState(defaultTool);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(0)
    let { id } = useParams();
    const { token } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        setError
    } = useForm();

    useEffect(() => {

        // Getting the tool id from params
        getTool(id);
        
    }, []);

    useEffect(() => {
        if(!token)
            return

        setUserId(jwt_decode(token).sub)
    }, [token])

    const getTool = async (id) => {
        await axios
            .get(`https://wms-api-ps1s.onrender.com/api/tools/${id}`)
            .then((response) => {
                setLoading(false);
                setTool(response.data[0]);
            })
            .catch((error) => console.error("Error: " + error));
    }

    const onSubmit = bookingData => {


    }

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className="flex justify-center flex-col items-center">
                    <img className="w-64 h-48 p-2 rounded-2xl" src={tool.imageurl} />
                    <h1 className="text-3xl font-bold ">{tool.name}</h1>
                    <p>{tool.description}</p>

                    {tool.dangerous ? <DangerWarning text="Potentially dangerous tool, use caution" /> : ''}

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col justify-center items-center [&>*]:m-3">

                        <div className="flex gap-2 items-center">
                            <label
                                htmlFor="booking_date">Date:</label>
                            <input
                                {...register('booking_date')}
                                type="date"
                                className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 "
                                name="booking_date" />
                        </div>

                        <div className="flex gap-2 items-center">
                            <label
                                className="min-w-[8ch]"
                                htmlFor="booking_start">Start time:</label>
                            <input
                                {...register('booking_start')}
                                type="time"
                                className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 "
                                name="booking_start" />
                        </div>

                        <div className="flex gap-2 items-center">
                            <label
                                className="min-w-[8ch]"
                                htmlFor="booking_end">End time:</label>
                            <input
                                {...register('booking_end')}
                                type="time"
                                className="bg-white border border-gray-300 text-eerie-black text-sm rounded-lg focus:ring-robin-egg-blue focus:border-robin-egg-blue block w-full p-2.5 "
                                name="booking_end" />
                        </div>

                        {token ? ( 
                            <input
                                type="submit"
                                value="Book!"
                                disabled={!token ? true : false} />)
                        : (<>
                            <p className="font-bold underline underline-offset-2">You must login to start booking tools</p>
                            
                            <Button text="Login here" link="/login" />
                        </>)}


                    </form>
                </div>
            )}
        </div>
    )
}
