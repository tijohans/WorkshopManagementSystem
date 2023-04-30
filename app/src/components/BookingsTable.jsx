import React, { ReactNode, useState, useContext, useEffect } from 'react'
import axios from 'axios'

export default function BookingsTable() {

const [booking, setBooking] = useState([])

useEffect(() => {
  getBooking()
}, []);



  const getBooking = () => {
    axios.get(`https://wms-api-ps1s.onrender.com/api/bookings/bookingwithtoolname`) 
      .then((response) => {
        setBooking(response.data)
       
      })
      .catch(error => console.error("Error: " + error))
  }

console.log(booking.booking_start)
  
  return (
   
<div className="relative overflow-x-auto  ">
<h2 className="text-2xl font-bold text-eerie-black flex flex-col justify-center items-center">My bookings</h2>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
    <table className="w-full text-sm text-left text-gray-500  ">
        <thead className="text-xs text-white uppercase bg-plum ">
            <tr >
                <th scope="col" className="px-6 py-3">
                    Tool name
                </th>
                <th scope="col" className="px-6 py-3">
                    User ID
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
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b hover:bg-ghost-white  ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                 {booking.toolName}
                </th>
                <td className="px-6 py-4">
                 {booking.user_id}
                </td>

                <td className="px-6 py-4">
                {booking.booking_date}
                </td>


                <td className="px-6 py-4">
                  {booking.booking_start}
                </td>
              
                <td className="px-6 py-4">
                  {booking.booking_end}
                </td>
              
            
            </tr>
        </tbody>
    </table>
</div>



</div>



  )
}