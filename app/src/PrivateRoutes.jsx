import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './context/authContext'


const PrivateRoutes = () => {
    const { token } = useContext(AuthContext)
    return (

        // auth.token ? <Outlet/> : <Navigate to='/Loginpage'/>
        token ? <Outlet /> : <Navigate to='/unauthorized' />
    )
}



export default PrivateRoutes