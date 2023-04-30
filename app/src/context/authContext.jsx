import { createContext, useEffect, useState } from "react"
import Cookie from "universal-cookie"
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const cookie = new Cookie()
    const [userRole, setUserRole] = useState(null)
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if(token)
            return

        // Getting the valuie from the token in the cookie and setting the state to that value
        const tokenInCookie = cookie.get('token')     
        setToken(tokenInCookie)

    }, [])

    useEffect(() => {
        
        // If not token is present in the context, get token from the cookie
        if(!token)
            return            

        // Setting the cookie to token that is in the context
        cookie.set('token', token)
        
        try {
            const decodedToken = jwt_decode(token)
            setUserRole(decodedToken.role)
        } catch (error) {
            cookie.remove('token')
            window.alert('You have been logged out')
            navigate('/')
        }
        
    }, [token])

    return (
        <AuthContext.Provider value={{token, setToken, userRole, setUserRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}