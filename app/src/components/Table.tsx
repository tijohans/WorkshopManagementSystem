import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type tableProps = {
    name: string
}

export default function Table(props: tableProps) {

    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        getTable()
    }, []);

    const getTable = () => {
        // ! Fetch table from locally hosted server (change later!)
        axios.get(`https://wms-api-ps1s.onrender.com/api/${props.name}`)
            .then((response) => {
                setData(response.data)
            })
            .catch(error => console.error("HJELP!! Error: " + error))
    }

    console.log(data)

    const items: any = []
    const headers: any = []

    data.map((item, key) => {
        if (key === 0) {
            for (const key in item) {
                if (key === "id" || key === "imageurl") continue
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
        <div className="relative overflow-x-auto border shadow-md sm:rounded-lg md:w-5/6 justify-center m-auto">
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
        </div>)
}