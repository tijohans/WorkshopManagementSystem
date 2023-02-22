import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setOpen] = useState<Boolean>(false)

    const toggleOverlay = () => {
        setOpen(!isOpen)
        console.log(isOpen)
    }

    return (
        <header className='h-20 flex justify-between items-center mb-5 px-[10vw] border-b-2 border-b-black'>
            <img src="/wms_logo.svg" alt="Logo for the workshop management system" className='w-28' />
            <button onClick={toggleOverlay}><img src="/icons/menu.svg" alt="" className='h-8' /></button>
        </header>
    )
}
