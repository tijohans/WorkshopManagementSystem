import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'


export default function UserTable() {

    return (

        <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold text-eerie-black flex flex-col justify-center items-center">My bookings</h2>
            <div className="overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <table className="w-full text-sm text-left text-gray-500  ">
                    <thead className="text-xs text-white uppercase bg-plum ">
                        <tr >
                            <th scope="col" class="px-6 py-3">
                                Booked tools
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Start time
                            </th>

                            <th scope="col" class="px-6 py-3">
                                End time
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Change booking
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-ghost-white  ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                                3D printer
                            </th>
                            <td class="px-6 py-4">
                                20.03.23
                            </td>

                            <td class="px-6 py-4">
                                12:00
                            </td>


                            <td class="px-6 py-4">
                                17:00
                            </td>

                            <td class="px-6 py-4">
                                <a href="#" className="font-medium text-plum transition ease-in-out hover:delay-50 duration-500 hover:underline hover:text-eerie-black underline-offset-4">Remove</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </div>

    );



}