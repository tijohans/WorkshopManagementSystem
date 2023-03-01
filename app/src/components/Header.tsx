import React, { useState } from 'react'

export default function Header() {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }


    return (
        <>
            <header className={'h-20 flex justify-between px-[5vw] items-center mb-5 border-b border-b-slate-300'}>
                <img src="/wms_logo.svg" alt="Logo for the workshop management system" className='w-28' />

                <nav className='hidden md:flex'>
                    <ul className='flex justify-center flex-row [&>*]:px-4'>
                        <li className=' transition ease-in-out hover:transition-delay-50 duration-300 hover:text-plum hover:underline underline-offset-8'>Home</li>
                        <li className='transition ease-in-out hover:transition-delay-50 duration-300 hover:text-plum hover:underline  underline-offset-8'>About</li>
                        <li className=' transition ease-in-out hover:transition-delay-50 duration-300 hover:text-plum hover:underline underline-offset-8'>Tools</li>
                    </ul>
                </nav>
                
                <button 
                    className='md:hidden'
                    onClick={toggleNav}>{nav ? <img src="/icons/menu.svg" alt="" /> : <img src="/icons/x.svg" alt="" />}</button>

                <nav className={!nav ? 'md:hidden fixed top-20 left-0 w-full h-full bg-ghost-white ease-in-out duration-500' : 'fixed left-[-100%] top-20 md:hidden' }>
                    <ul className='uppercase text-4xl font-bold [&>*]:m-5 [&>*]:my-10'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Tools</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
