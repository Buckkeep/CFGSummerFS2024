import './App.css'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  )
}

export default App
