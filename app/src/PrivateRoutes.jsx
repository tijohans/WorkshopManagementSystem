import { Navigate, Outlet} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'

const PrivateRoutes = () => {
  const { token } = useContext(AuthContext)

return (
  
    token ? <Outlet/> : <Navigate to='/unauthorized'/>
  )
}

export default PrivateRoutes