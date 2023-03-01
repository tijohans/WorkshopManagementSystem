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
        axios.get(`http://localhost:9003/api/${props.name}`)
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
    // <th scope="col" className="px-6 py-3 ">{key}</th>

    // headers.push(<th scope="col" className="px-6 py-3 ">Book</th>)

/*
    <tr className="bg-white border-b hover:bg-ghost-white  ">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
            {item.name}
        </th>

        <td className="px-6 py-4">
            {item.description}
        </td>

        <td className="px-6 py-4">
            {item.broken}
        </td>

        <td className="px-6 py-4">
            {item.dangerous}
        </td>

        <td className="px-6 py-4">
            <a href="#" className="font-medium text-plum transition ease-in-out hover:delay-50 duration-500 hover:underline hover:text-eerie-black underline-offset-4">Book</a>
        </td>
    </tr>
*/

/* return (
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
    </div>
);
}





















/*


function Table(table: string) {
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

async function getTable(name: string) {
try {
    const response = await axios.get(`http://10.24.101.2:9003/api/${name}`)
    return response['data']

} catch (error) {
    console.error(error)
    return null
}
}
*/