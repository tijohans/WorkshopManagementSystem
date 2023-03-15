import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ReactLoading from 'react-loading'
import ToolCard from '../ToolCard';

export default function ToolCards() {
    const [loading, setLoading] = useState(true)
    const [tools, setTools] = useState([])
  
  
    useEffect(() => {
      getTools()
    }, []);
  
    const getTools = () => {
      axios.get(`https://wms-api-ps1s.onrender.com/api/tools`)
        .then((response) => {
          setTools(response.data)
          setLoading(false)
        })
        .catch(error => console.error("Error: " + error))
    }
  
    const toolCards = tools.map((tool, key) => <ToolCard key={key} id={tool.id} src={tool.imageurl} name={tool.name} paragraph={tool.description} />)
  
  
    return (
      <div className='flex flex-wrap justify-center gap-6 mx-6'>
        {loading ? <ReactLoading type='spin' color='#9C528B'/> : toolCards}
      </div>
    )
  }