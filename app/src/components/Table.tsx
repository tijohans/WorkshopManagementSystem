import React from 'react'


function Table() {
    return (
<div className="relative overflow-x-auto border shadow-md sm:rounded-lg md:w-5/6 justify-center m-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-white uppercase bg-plum ">
            <tr>
                <th scope="col" className="px-6 py-3 ">
                    Tool Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Dangerous
                </th>
              
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b hover:bg-ghost-white  ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Yes
                </td>
              
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-plum transition ease-in-out hover:delay-50 duration-500 hover:underline hover:text-eerie-black underline-offset-4">Book</a>
                </td>
            </tr>
            <tr className="bg-white border-b hover:bg-ghost-white  ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    No
                </td>
              
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-plum transition ease-in-out hover:delay-50 duration-500 hover:underline hover:text-eerie-black underline-offset-4">Book</a>
                </td>
            </tr>
            <tr className="bg-white hover:bg-ghost-white ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    No
                </td>
              
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-plum transition ease-in-out hover:delay-50 duration-500 hover:underline hover:text-eerie-black underline-offset-4">Book</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    );
  }
  
  export default Table;