import { useContext, useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import ReactLoading from 'react-loading'

const PrivateRoutes = () => {
    const { userRole } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (userRole !== null) {
            setIsLoading(false)
        }
    }, [userRole])

    if (isLoading) {
        return <ReactLoading type='spin' color='#9C528B'/>
    }

    return userRole === 1 ? <Outlet /> : <Navigate to='/unauthorized' />

}

export default PrivateRoutes