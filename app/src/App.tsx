import { useState } from 'react'
import Button from './components/Button'

import Footer from './components/Footer'

import Header from './components/Header'
import Landing from './components/Landing-Page'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-ghost-white">
      <Header />
      <Landing heading="Workshop Management System" paragraph="The place where you can view, find, and book all the tools you need. All from the same web-page"/>
      <Button/>
      <Footer />
    </div>
  )
}

export default App