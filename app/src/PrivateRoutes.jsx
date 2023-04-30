import { useContext, useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './context/authContext'



const PrivateRoutes = () => {
    const { token } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (token !== null) {
            setIsLoading(false)
        }
    }, [token])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return token ? <Outlet /> : <Navigate to='/unauthorized' />

}

export default PrivateRoutes