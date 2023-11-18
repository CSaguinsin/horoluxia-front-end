import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import LogIn from './Components/LogIn'
import Navbar from './Components/Navbar'
import SignUp from './Components/SignUp'
import Footer from './Components/Footer';
import WomenWatchTab from './Components/WomenWatchTab';
import NewsLetter from './Components/NewsLetter';


function App() {
  return (
  <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/WomenWatchTab' element={<WomenWatchTab />} />
    </Routes>
    <NewsLetter />
    <Footer />
  </Router>
  )
}

export default App
