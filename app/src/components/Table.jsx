import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import TableFooter from './Table/TableFooter'
import useTable from './Table/useTable'

export default function Table({ name, rowsPerPage }) {

    const [data, setData] = useState([])
    const [locations, setLocations] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const { slice, range } = useTable(data, page, rowsPerPage);

    let tempData
    let tempLocations

    useEffect(() => {
        getTable()
    }, []);

    const getTable = () => {
        axios.get(`https://wms-api-ps1s.onrender.com/api/${name}`)
            .then((response) => {
                tempData = response.data
                axios.get(`https://wms-api-ps1s.onrender.com/api/locations`)
                    .then((response) => {
                        tempLocations = response.data
                        setData(tempData)
                        setLocations(tempLocations)
                        setLoading(false)
                    })
                    .catch(error => console.error("Error: " + error))

            })
            .catch(error => console.error("Error: " + error))
    }


    const items = []
    const headers = []


    // Check if location_id matches, if so add the location as a name to the data array
    for (let i = 0; i < data.length; i++) {
        for (let z = 0; z < locations.length; z++) {
            if (data[i].location_id === locations[z].location_id) {
                data[i].location = locations[z].location
            }
        }
    }

    // Headers
    data.map((item, key) => {
        if (key === 0) {
            for (const key in item) {
                if (key === "id" || key === "imageurl" || key === 'visible' || key === 'location_id' || key === 'bookable' || key === 'course_id' || key === 'password') continue

                headers.push(<th scope="col" key={key} className="px-6 py-3 ">{key}</th>)

            }
        }
    })

    slice.map((item) => {
        switch (name) {
            case "tools":
                items.push(
                    <tr className="bg-white border-b hover:bg-ghost-white  ">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                            {item.name}
                        </td>

                        <td className="px-6 py-4">
                            {item.description}
                        </td>

                        <td className="px-6 py-4">
                            {String(item.broken)}
                        </td>

                        <td className="px-6 py-4">
                            {item.dangerous ? <><img className='inline' src='/icons/alert-triangle.svg' /><p>Yes</p></> : ''}
                        </td>

                        <td className="px-6 py-4">
                            {item.location ? item.location : "N/A"}
                        </td>

                        <td className="px-6 py-4">
                            <Link className="font-medium text-plum transition ease-in-out hover:delay-50 duration-500 hover:underline hover:text-eerie-black underline-offset-4" to={"/tools/" + item.id}>Book</Link>
                        </td>
                    </tr>
                )
                break

            case "users":
                items.push(
                    <tr className="bg-white border-b hover:bg-ghost-white  ">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                            {item.first_name}
                        </td>

                        <td className="px-6 py-4">
                            {item.last_name}
                        </td>

                        <td className="px-6 py-4">
                            {item.email}
                        </td>

                        <td className="px-6 py-4">
                            <Link className="font-medium text-plum transition ease-in-out hover:delay-50 duration-500 hover:underline hover:text-eerie-black underline-offset-4" to={"/admin/user/" + item.id}>Edit</Link>
                        </td>
                    </tr>
                )
                break
        }
    })




headers.push(<th scope="col" className="px-6 py-3">Action</th>)

return (
    <div className="overflow-x-auto mx-auto my-10 shadow-md sm:rounded-lg md:w-5/6">
        {loading ? <ReactLoading type='spin' color='#9C528B' /> :
            <div>
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-white uppercase bg-plum ">
                        <tr>
                            {headers}
                        </tr>
                    </thead>
                    <tbody className='[&>*:nth-child(even)]:bg-purple-50'>
                        {items}
                    </tbody>

                </table>
                <TableFooter range={range} slice={slice} setPage={setPage} />
            </div>
        }

    </div>
)
}


// * Pagination part of table

/* 
<nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
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
            </nav> */