import { createContext, useEffect, useState } from "react"
import Cookie from "universal-cookie"
import jwt_decode from 'jwt-decode'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const cookie = new Cookie()
    const token = cookie.get('token')
    const [userRole, setUserRole] = useState(NaN)

    useEffect(() => {
        if(!token)
            return 
            
        const decodedToken = jwt_decode(token)
        
        setUserRole(decodedToken.role)
    }, [token])

    return (
        <AuthContext.Provider value={{token, userRole}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}