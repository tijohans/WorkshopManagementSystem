import React, { useState, useEffect } from 'react'
import ToolCard from '../components/ToolCard'
import axios from 'axios'

export default function ToolsOverview() {

  const [tools, setTools] = useState<any[]>([])

  useEffect(() => {
    getTools()
  }, []);

  const getTools = () => {
    axios.get(`https://wms-api-ps1s.onrender.com/api/tools`)
      .then((response) => {
        setTools(response.data)
      })
      .catch(error => console.error("Error: " + error))
  }

  const toolCards = tools.map(tool => <ToolCard key={tool.id} id={tool.id} src={tool.imageUrl} name={tool.name} paragraph={tool.description} />)

  return (
      <div className="flex flex-wrap justify-center items-center gap-4 min-h-full ">
        {toolCards}
      </div>
  )
}
