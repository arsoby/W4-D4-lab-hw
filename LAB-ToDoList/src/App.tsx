import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './component/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage/>
    </div>
  )
}

export default App
