import React, { ReactNode, useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/authContext'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import ReactLoading from 'react-loading'

export default function UserInfo() {
    const { token } = useContext(AuthContext)
    const userId = jwt_decode(token).sub
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        getUser()
    }, []);


    const getUser = () => {
        axios.get(`https://wms-api-ps1s.onrender.com/api/users/${userId}`, { headers: { "x-access-token": token } })
            .then((response) => {
                setUser(response.data[0])
                setLoading(false)
            })
            .catch(error => console.error("Error: " + error))
    }


    return (
        <>
        {loading ? (
            <div className="flex justify-center mt-20">
            <ReactLoading type="spin" color="#9C528B" />
            </div>
            ) : (

<div className="bg-white px-9 shadow-md rounded-lg h-max pb-8">
            <h3 className="text-2xl font-bold text-eerie-black flex flex-col justify-center items-center mt-5"> </h3>
          {/*   <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center mb-10 md:mb-42 h-fit">
*/}
                    <h3 className="text-2xl py-5 font-bold text-eerie-black flex flex-col justify-center items-center mt-5">{user.first_name} {user.last_name}</h3>


<ol>
    <li className="py-5"><span className="font-bold">First name: </span> {user.first_name}</li>
    <li className="py-5"><span className="font-bold">Last name: </span>{user.last_name}</li>
    <li className="py-5"><span className="font-bold">Email:</span> {user.email}</li>
    </ol>
    </div>

                  

            )}

     
        </>
    )
}