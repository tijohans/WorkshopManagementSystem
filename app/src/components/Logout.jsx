import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import Cookies from 'universal-cookie'

export default function Logout() {

    const { setToken, setUserRole } = useContext(AuthContext)
    const navigate = useNavigate()
    const cookie = new Cookies()


    const terminateLogin = _ => {
        if(!window.confirm('Are you sure you want to logout?'))
            return

        cookie.remove('token')

        setToken(null)
        setUserRole(null)

        navigate('/')
    }

    return (
        <main>
            <Button clickFunction={terminateLogin} text="Logout"></Button>
        </main>
    )
}
