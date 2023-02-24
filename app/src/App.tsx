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
	  
      <h1 className="text-3xl font-bold italic underline">
	  
      {/* <h1 className="text-3xl font-bold italic underline">
        Hello world!

      </h1>
      <Button text="kefaen"/>
      <Footer/>

      </h1> */}
	  
      {/* <Button text="kefaen"/> */}
      
      <Landing heading="Workshop Management System" paragraph="The place where you can view, find, and book all the tools you need. All from the same web-page"/>

    </div>
  )
}

export default App
