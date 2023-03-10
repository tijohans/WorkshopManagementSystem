import React, { useState, useEffect, useRef } from 'react'
import ToolCard from '../components/ToolCard'
import axios from 'axios'
import Table from '../components/Table'
import Button from '../components/Button'

export default function ToolsOverview() {

  const [tools, setTools] = useState<any[]>([])
  const [toggleView, setToggleView] = useState<boolean>(false)

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

  const toolCards = tools.map((tool, key) => <ToolCard key={key} id={tool.id} src={tool.imageurl} name={tool.name} paragraph={tool.description} />)

  return (
    <div className="flex flex-wrap flex-col justify-center items-center gap-4 min-h-full">

      {/* // ? Jallascript???? */}
      <span onClick={() => setToggleView(!toggleView)} ><Button text='toggle view' /></span>

      {toggleView ? <Table name="tools" /> :
        <div className='flex flex-wrap justify-center gap-6 mx-6'>
          {toolCards}
        </div>
      }

    </div>
  )
}
