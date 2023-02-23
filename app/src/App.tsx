import { useState } from 'react'
import Button from './components/Button'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold italic underline">
        Hello world!
      </h1>
      <Button text="kefaen"/>
      <Footer/>
    </div>
  )
}

export default App
