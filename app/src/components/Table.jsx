import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Table(props) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTable()
    }, []);

    const getTable = () => {
        axios.get(`https://wms-api-ps1s.onrender.com/api/${props.name}`)
            .then((response) => {
                setData(response.data)
                setLoading(false)
            })
            .catch(error => console.error("Error: " + error))
    }

    console.log(data)

    const items = []
    const headers = []

    data.map((item, key) => {
        if (key === 0) {
            for (const key in item) {
                if (key === "id" || key === "imageurl" || key === 'visible' || key === 'bookable') continue
                headers.push(<th scope="col" className="px-6 py-3 ">{key}</th>)
            }
        }

        items.push(
            <tr className="bg-white border-b hover:bg-ghost-white  ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                    {item.name}
                </th>

                <td className="px-6 py-4">
                    {item.description}
                </td>

                <td className="px-6 py-4">
                    {String(item.broken)}
                </td>

                <td className="px-6 py-4">
                    {String(item.dangerous)}
                </td>

                <td className="px-6 py-4">
                    <Link className="font-medium text-plum transition ease-in-out hover:delay-50 duration-500 hover:underline hover:text-eerie-black underline-offset-4" to={"/tools/" + item.id}>Book</Link>
                </td>
            </tr>




        )
    })

    headers.push(<th scope="col" className="px-6 py-3">Action</th>)

    return (
        <div className="overflow-x-auto mx-auto my-10 shadow-md sm:rounded-lg md:w-5/6">
            {loading ? <h1>Loading....</h1> :
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-white uppercase bg-plum ">
                        <tr>
                            {headers}
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            }
        </div>
    )
}


// * Pagination part of table
{/* <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
    <span className="text-sm font-normal text-gray-500 ">Showing <span className="font-semibold text-gray-900 ">1-10</span> of <span className="font-semibold text-gray-900 ">1000</span></span>
    <ul className="inline-flex items-center -space-x-px">
        <li>
            <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ">
                <span className="sr-only">Previous</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </a>
        </li>
        <li>
            <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-plum border border-purple-300 bg-purple-50 hover:bg-purple-100 hover:text-plum ">1</a>
        </li>
        <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-ghost-white hover:text-gray-700 ">2</a>
        </li>
        <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-ghost-white hover:text-gray-700 ">3</a>
        </li>
        <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-ghost-white hover:text-gray-700 ">...</a>
        </li>
        <li>
            <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-ghost-white hover:text-gray-700 ">100</a>
        </li>
        <li>
            <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-ghost-white hover:text-gray-700 ">
                <span className="sr-only">Next</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
        </li>
    </ul>
</nav> */}