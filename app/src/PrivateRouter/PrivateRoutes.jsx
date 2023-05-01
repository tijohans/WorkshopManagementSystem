import { useContext, useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import ReactLoading from 'react-loading'

const PrivateRoutes = () => {
    const { token } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (token !== null) {
            setIsLoading(false)
        }
    }, [token])

    if (isLoading) {
        return <ReactLoading type='spin' color='#9C528B'/>
    }

    return token ? <Outlet /> : <Navigate to='/unauthorized' />

}

export default PrivateRoutes