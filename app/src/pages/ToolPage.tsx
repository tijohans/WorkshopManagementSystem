import React, { useState, useEffect } from 'react'
import Tool from '../components/Tool'
import axios from 'axios'

type toolid = {
    id?: string
}

type ToolType = {
    id: string, 
    name: string,
    imageurl: string,
    description: string,
    broken: boolean,
    dangerous: boolean
}

const loading: ToolType = {
    id: 'loading',
    name: 'name',
    imageurl: 'imageurl',
    description: 'description',
    broken: false,
    dangerous: false
}


export default function ToolPage(props: toolid) {
    const [tool, setTool] = useState<ToolType>(loading)

    useEffect(() => {
        getTool()
    }, []);

    const getTool = () => {
        axios.get(`https://wms-api-ps1s.onrender.com/api/tools/2`)
            .then((response) => {
                setTool(response.data)
            })
            .catch(error => console.error("Error: " + error))
    }


    return (
        <div>
            <h1>{tool.name}</h1>
            <p>{tool.description}</p>
            </div>
    )
}