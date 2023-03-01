import React, { ReactNode, useState } from 'react'

function listItems(): any {
    const pages: String[] = ['Home', 'About', 'Tools']

    return (
        // <ul className='flex justify-center flex-row [&>*]:px-4'>
        pages.map(elem => {<li className='hover:underline'>{elem}</li>})
        // </ul>
    )
}

export default function Header() {
    const [nav, setNav] = useState(true)
    const [pages, setPages] = useState(['home', 'about', 'tools'])

    const toggleNav = () => {
        setNav(!nav)
    }

    // Generates all the list items
    const generateListItems = () => {
        return pages.map(elem => <li className='hover:underline'>{elem}</li>)
    }


    return (
        <header className={'h-20 flex justify-between px-[5vw] items-center mb-5 border-b border-b-black'}>
            <img src="/wms_logo.svg" alt="Logo for the workshop management system" className='w-28' />

            <nav className='hidden md:flex'>
                <ul className='flex justify-center flex-row [&>*]:px-4'>
                    {generateListItems()}
                </ul>
            </nav>
            
            <button 
                className='md:hidden'
                onClick={toggleNav}>{nav ? <img src="/icons/menu.svg" alt="" /> : <img src="/icons/x.svg" alt="" />}</button>

            <nav className={!nav ? 'md:hidden fixed top-20 left-0 w-full h-full bg-ghost-white ease-in-out duration-500' : 'fixed left-[-100%] top-20 md:hidden' }>
                <ul className='uppercase text-4xl font-bold [&>*]:m-5 [&>*]:my-10'>
                    {generateListItems()}
                </ul>
            </nav>
        </header>
    )
}
