import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Swap from './pages/Swap'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/swap" element={<Swap />}/>
    </Routes>
  )
}

export default App