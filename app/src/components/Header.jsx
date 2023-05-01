import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

export default function Header() {

    const [nav, setNav] = useState(true)
    const [pages, setPages] = useState(['home', 'tools', 'login'])
    const { token, userRole } = useContext(AuthContext)
    

    const toggleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        setPages(['home', 'tools', 'login'])        

        if(token) 
            setPages(['home', 'tools', 'userpage', 'logout'])

        console.log(userRole)

        if(userRole === 1)
            setPages(['home', 'tools', 'userpage', 'admin', 'logout'])

    }, [token, userRole])

    // Generates all the list items
    const generateListItems = () => {

        const currentPath = window.location.pathname;

        return pages.map((elem, key) => <li 
            key={key} 
            className={` transition ease-in-out hover:transition-delay-50 duration-300 hover:text-plum hover:underline underline-offset-8
            ${currentPath === "/" + elem ? "underline" : ""}`}
            onClick={toggleNav}>

                {/* Could probably find a more elegant solution to this */}
                {elem == "home" ? <Link to='/' className={currentPath === '/' ? 'underline' : ''} >{elem}</Link> : <Link to={'/' + elem}>{elem}</Link>}
            </li>)
    }


    return (
        <header className={'h-20 flex justify-between px-[5vw] items-center mb-5 border-b border-b-slate-300'}>
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
