import React from 'react'
import { useEffect, useRef, useState } from "react";
import '../Css/Style.css';
import Navbar from './Navbar';

function Home() {
  return (
    <>
        <div className="header">
            <p>FREE SHIPPING UNTIL JANUARY 2025</p>
        </div>
        <Navbar />
    </>
  )
}

export default Home