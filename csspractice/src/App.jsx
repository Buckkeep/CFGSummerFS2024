import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './Start'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Start />
    </>
  )
}

export default App
