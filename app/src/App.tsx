import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing-Page'
import Tool from './components/Tool'
import ToolCard from './components/ToolCard'
import Table from './components/Table'
import Button from './components/Button'
import ToolsOverview from './pages/ToolsOverview'
import ToolPage from './pages/ToolPage'
import LoginPage from './pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-ghost-white ">
      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/tools'>
          <Route index element={<ToolsOverview /> } />
          <Route path=':id' element={<ToolPage />} />
          
        </Route>

        <Route element={<LoginPage /> } path='/login'>
        
        </Route>
      
      </Routes>


      <Footer/>
    </div>
  )
}

export default App
