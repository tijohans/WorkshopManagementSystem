import React, { ReactNode, useState } from 'react'

function listItems(): any {
    const pages: String[] = ['Home', 'About', 'Tools']

    pages.map((page) => {
        <li>{page}</li>
    })
}

export default function Header() {
    const [nav, setNav] = useState(true)

    const toggleNav = () => {
        setNav(!nav)
    }


    return (
        <>
            <header className={'h-20 flex justify-between px-[5vw] items-center mb-5 border-b border-b-black'}>
                <img src="/wms_logo.svg" alt="Logo for the workshop management system" className='w-28' />

                <nav className='hidden md:flex'>
                    <ul className='flex justify-center flex-row [&>*]:px-4'>
                        <li className='hover:underline'>Home</li>
                        <li className='hover:underline'>About</li>
                        <li className='hover:underline'>Tools</li>
                    </ul>
                </nav>
                
                <button 
                    className='md:hidden'
                    onClick={toggleNav}>{nav ? <img src="/icons/menu.svg" alt="" /> : <img src="/icons/x.svg" alt="" />}</button>

                <nav className={!nav ? 'md:hidden fixed top-20 left-0 w-full h-full bg-ghost-white ease-in-out duration-500' : 'fixed left-[-100%] top-20 md:hidden' }>
                    <ul className='uppercase text-4xl font-bold [&>*]:m-5 [&>*]:my-10'>
                        <li>test li</li>
                        {listItems()}
                    </ul>
                </nav>
            </header>
        </>
    )
}
