import React, { useState } from 'react'
import Table from '../components/Table'
import Button from '../components/Button'
import ToolCards from '../components/ToolOverview/ToolCards'


export default function ToolsOverview() {

  const [toggleView, setToggleView] = useState(false)

  return (
    <div className="flex flex-wrap flex-col justify-center items-center gap-4 min-h-full">

      {/* // ? Jallascript???? */}
      <span onClick={() => setToggleView(!toggleView)} ><Button text='toggle view' /></span>

      {toggleView ? <Table name="tools" /> : <ToolCards />}

    </div>
  )
}
