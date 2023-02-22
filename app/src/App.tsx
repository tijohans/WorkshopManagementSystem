import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold italic underline">
        Hello world!
      </h1>
      <Button text="kefaen"/>
    </div>
  )
}

export default App
