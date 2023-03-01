import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing-Page'
import Tool from './components/Tool'
import ToolCard from './components/ToolCard'
import Table from './components/Table'
import ToolsOverview from './pages/ToolsOverview'
import ToolPage from './pages/ToolPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-ghost-white ">
      <Header />

      <Routes>
        <Route path='/' element={<Landing heading="Workshop Management System" paragraph="The place where you can view, find, and book all the tools you need. All from the same web-page"/>} />
        <Route path='/tools'>
          <Route index element={<ToolsOverview /> } />
          
          <Route path=':halla' element={<ToolPage />} />
        </Route>

      </Routes>


      <Footer />
    </div>
  )
}

export default App
