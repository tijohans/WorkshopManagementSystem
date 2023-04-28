import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'


export default function CourseTable() {

    return (

        <div className="overflow-x-auto mb-10 md:bottom-36 ">
            <h2 className="text-2xl font-bold text-eerie-black flex flex-col justify-center items-center md:mt-40">Courses</h2>
            <div className="overflow-x-auto shadow-md rounded-lg  mt-6">
                <table className="md:w-64 text-sm text-left    ">
                    <thead className="text-xs text-white uppercase bg-plum ">
                        <tr >
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr className="bg-white border-b hover:bg-ghost-white  ">
                            <th scope="row" className="px-6 py-4 font-light text-gray-900 whitespace-nowrap   ">
                                HMS 1
                            </th>

                            <td class="px-6 py-4 text-green-600 font-bold" >
                                Completed
                            </td>
                        </tr>

                        <tr className="bg-white border-b hover:bg-ghost-white  ">
                            <th scope="row" className="px-6 py-4 font-light text-gray-900 whitespace-nowrap  ">
                                HMS 2
                            </th>

                            <td class="px-6 py-4 text-green-600 font-bold">
                                Completed
                            </td>
                        </tr>

                        <tr className="bg-white border-b hover:bg-ghost-white  ">
                            <th scope="row" className="px-6 py-4 font-light text-gray-900 whitespace-nowrap  ">
                                HMS 3
                            </th>

                            <td class="px-6 py-4 text-red-600 font-bold">
                                Not complete
                            </td>
                        </tr>

                        <tr className="bg-white border-b hover:bg-ghost-white  ">
                            <th scope="row" className="px-6 py-4 font-light text-gray-900 whitespace-nowrap  ">
                                HMS 4
                            </th>

                            <td class="px-6 py-4 text-green-600 font-bold">
                                Completed
                            </td>
                        </tr>

                        <tr className="bg-white border-b hover:bg-ghost-white  ">
                            <th scope="row" className="px-6 py-4 font-light text-gray-900 whitespace-nowrap  ">
                                HMS 5
                            </th>

                            <td class="px-6 py-4 text-red-600 font-bold">
                                Not complete
                            </td>
                        </tr>

                        <tr className="bg-white border-b hover:bg-ghost-white  ">
                            <th scope="row" className="px-6 py-4 font-light text-gray-900 whitespace-nowrap  ">
                                HMS 6
                            </th>

                            <td class="px-6 py-4 text-red-600 font-bold">
                                Not complete
                            </td>
                        </tr>

                        <tr className="bg-white border-b hover:bg-ghost-white  ">
                            <th scope="row" className="px-6 py-4 font-light text-gray-900 whitespace-nowrap  ">
                                HMS 7
                            </th>

                            <td class="px-6 py-4 text-green-600 font-bold">
                                Completed
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



        </div>

    );



}