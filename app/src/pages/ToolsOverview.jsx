import React, { useState } from 'react'
import Table from '../components/Table'
import Button from '../components/Button'
import ToolCards from '../components/ToolOverview/ToolCards'
import CreateToolButton from '../components/CreateToolButton'

export default function ToolsOverview() {

  const [toggleView, setToggleView] = useState(false)

  const toggle = () => {
    setToggleView(!toggleView)
  }

  return (
    
    <div className="flex flex-wrap flex-col justify-center items-center gap-4 min-h-full">
      <Button text='Toggle View' clickFunction={toggle} />
      <CreateToolButton text="Create Tool" />
      {toggleView ? <Table name="tools" rowsPerPage={4}/> : <ToolCards />}
    </div>
  )
}
