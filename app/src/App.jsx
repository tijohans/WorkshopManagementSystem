import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing-Page'
import ToolsOverview from './pages/ToolsOverview'
import ToolPage from './pages/ToolPage'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import ToS from './pages/ToS'
import AdminDashboard from './pages/AdminDashboard'
import AdminUserEdit from './pages/AdminUserEdit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-ghost-white ">
      <Header />
<body className="min-h-screen h-full">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/tools'>
          <Route index element={<ToolsOverview /> } />
          <Route path=':id' element={<ToolPage />} />
          
        </Route>

        <Route element={<LoginPage /> } path='/login' />

        <Route element={<UserPage />} path='/userpage' />

        <Route element={<ToS />} path='/termsofservice' />
        
        <Route element={<AdminDashboard />} path='/admin' />

        <Route path='/admin/user'>
          <Route index element={<AdminUserEdit/>} />
          <Route path=':id' element={<AdminUserEdit edit="true"/>} />
        </Route>
      
      </Routes>

      </body>
      <Footer/>
      
    </div>
  )
}

export default App
