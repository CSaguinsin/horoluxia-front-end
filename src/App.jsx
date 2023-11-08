import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import LogIn from './Components/LogIn'
import Navbar from './Components/Navbar'
import SignUp from './Components/SignUp'

function App() {
  return (
  <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/SignUp' element={<SignUp />} />
    </Routes>
  </Router>
  )
}

export default App
