import React, { ReactNode, useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/authContext'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

export default function UserTable() {
    const { token } = useContext(AuthContext)
    const userId = jwt_decode(token).sub
    const [userBooking, setUserBooking] = useState([])


    useEffect(() => {
        getUserBooking()
    }, []);


    const getUserBooking = () => {
        axios.get(`https://wms-api-ps1s.onrender.com/api/bookings/user/${userId}`, { headers: { "x-access-token": token } })
            .then((response) => {
                setUserBooking(response.data[0])
                //setLoading(false)
            })
            .catch(error => console.error("Error: " + error))
    }


    console.log(userBooking)
  
    return (

        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold text-eerie-black flex flex-col justify-center items-center">My bookings</h2>
            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <table className="w-full text-sm text-left text-gray-500  ">
                    <thead className="text-xs text-white uppercase bg-plum ">
                        <tr >
                            <th scope="col" className="px-6 py-3">
                                Booked tools
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Start time
                            </th>

                            <th scope="col" className="px-6 py-3">
                                End time
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Change booking
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-ghost-white  ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                             
                            </th>
                            <td className="px-6 py-4">
                                20.03.23
                            </td>

                            <td className="px-6 py-4">
                                12:00
                            </td>


                            <td className="px-6 py-4">
                                17:00
                            </td>

                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-plum transition ease-in-out hover:delay-50 duration-500 hover:underline hover:text-eerie-black underline-offset-4">Remove</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </div>

    );



}