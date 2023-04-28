import { createContext, useEffect, useState } from "react"
import Cookie from "universal-cookie"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const cookie = new Cookie()
    const token = cookie.get('token')

    useEffect(() => {

    }, [])

    return (
        <AuthContext.Provider value={{token}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}