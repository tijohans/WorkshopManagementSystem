import React, { useState, useEffect } from 'react'
import Tool from '../components/Tool'
import axios from 'axios'
import { useParams } from 'react-router-dom'

type ToolType = {
    id: string, 
    name: string,
    imageurl: string,
    description: string,
    broken: boolean,
    dangerous: boolean
}

const defaultTool: ToolType = {
    id: 'loading',
    name: 'name',
    imageurl: 'imageurl',
    description: 'description',
    broken: false,
    dangerous: false
}

export default function ToolPage() {
    const [tool, setTool] = useState<ToolType>(defaultTool)
    const [loading, setLoading] = useState<Boolean>(true)
    let { id } = useParams()

    useEffect(() => {
        getTool(id)
    }, []);

    const getTool = async (id: any) => {
        await axios.get(`https://wms-api-ps1s.onrender.com/api/tools/${id}`)
            .then((response) => {
                setLoading(false)
                setTool(response.data[0])
            })
            .catch(error => console.error("Error: " + error))
        
    }

    return (
        <div>
            {loading ? <h1>Loading...</h1> : 
            <div>
                <h1>{tool.name}</h1>
                <p>{tool.description}</p>
            </div>}
        </div>
    )
}