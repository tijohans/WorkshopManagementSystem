import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing-Page'
import ToolsPage from './pages/ToolsOverview'
import Tool from './components/Tool'
import ToolCard from './components/ToolCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-ghost-white ">
      <Header />

      <Routes>
        <Route path='/' element={<Landing heading="Workshop Management System" paragraph="The place where you can view, find, and book all the tools you need. All from the same web-page"/>} />
        <Route path='/tools'>
          <Route index element={<ToolsPage /> } />
          <Route path=':id' element={<Tool />} />
        </Route>

      </Routes>


      <Footer />
    </div>
  )
}

export default App
