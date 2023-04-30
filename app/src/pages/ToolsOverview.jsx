import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import Button from '../components/Button'
import ToolCards from '../components/ToolOverview/ToolCards'
import CreateToolButton from '../components/CreateToolButton'
import Cookies from 'universal-cookie'

export default function ToolsOverview() {
    const cookie = new Cookies()
    const [toggleView, setToggleView] = useState('gallery')

    const toggle = () => {
        if(toggleView === 'gallery') {
            setToggleView('table')
            cookie.set('toggleView', 'table')
        }

        if(toggleView === 'table') {
            setToggleView('gallery')
            cookie.set('toggleView', 'gallery')
        }
    }

    useEffect(() => {
        const existingCookie = cookie.get('toggleView')

        if(!existingCookie)
            return
        
        setToggleView(existingCookie)
    }, [])

    return (

        <div className="flex flex-wrap flex-col justify-center items-center gap-4 min-h-full">
            <Button text='Toggle View' clickFunction={toggle} />
            <CreateToolButton text="Create Tool" />
            {toggleView === 'table' ? <Table name="tools" rowsPerPage={15} /> : <ToolCards />}
        </div>
    )
}