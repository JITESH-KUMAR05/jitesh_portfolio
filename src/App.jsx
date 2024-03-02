import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route , Routes , Link } from 'react-router-dom'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Navbar from './pages/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
      
    </>
  )
}

export default App
