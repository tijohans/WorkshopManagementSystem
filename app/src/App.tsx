import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing-Page'
import ToolsOverview from './pages/ToolsOverview'
import ToolPage from './pages/ToolPage'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'

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
        <Route element={<LoginPage /> } path='/login'>
        </Route>

        <Route element={<UserPage />} path='/userpage'>
        </Route>
      
      </Routes>

      </body>
      <Footer/>
      
    </div>
  )
}

export default App
