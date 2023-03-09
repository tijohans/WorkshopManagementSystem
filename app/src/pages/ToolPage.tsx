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

const defaultTool: ToolType = {
    id: 'loading',
    name: 'name',
    imageurl: 'imageurl',
    description: 'description',
    broken: false,
    dangerous: false
}

export default function ToolPage(props: toolid) {
    const [tool, setTool] = useState<ToolType>(defaultTool)
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        getTool()
    }, []);

    const getTool = async () => {
        await axios.get(`http://localhost:9003/api/tools/2`)
            .then((response) => {
                setTool(response.data[0])
                console.log(response.data)
                setLoading(false)
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