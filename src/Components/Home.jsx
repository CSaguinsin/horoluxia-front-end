import React from 'react'
import { useEffect, useRef, useState } from "react";
import '../Css/Style.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

import Add10 from '../assets/Pictures/Add10.jpg';
import Add11 from '../assets/Pictures/Add11.jpg';
import Add12 from '../assets/Pictures/Add12.jpeg';
import Add13 from '../assets/Pictures/Add13.jpg';
import Add14 from '../assets/Pictures/Add14.jpg';
import Add15 from '../assets/Pictures/Add15.jpg';
import Add16 from '../assets/Pictures/Add16.jpg';

function Home() {
  
  const limited = {
    padding: '0 50px',
    display: 'flex',
    flexDirection: 'row',
  };

  const Img = {
    height: '25rem',
    marginRight: '50px',
    width: '19rem',
  };

  const Sections = {
    marginLeft: '50px',
  }

  const SeeMoreTitle = {
    color: 'black',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginLeft: '50px',
    marginTop: '50px',
    fontFamily: 'Libre Baskerville, serif'
  };
  
  
  
  return (
    <>
        <div className="header">
            <p>FREE SHIPPING UNTIL JANUARY 2025</p>
        </div>
        <Navbar />
        <HeroSection />

        <section style={Sections}> 
            <h1 style={SeeMoreTitle}>Limited Editions</h1>
              <div style={limited}>
                  <img src={Add10} alt="Add1"  style={Img}/>
                  <img src={Add11} alt="Add2" style={Img}/>
                  <img src={Add12} alt="Add3" style={Img}/>
                  <img src={Add13} alt="Add4" style={Img}/>
              </div>
        </section>

        <section style={Sections}> 
            <h1 style={SeeMoreTitle}>Men</h1>
              <div style={limited}>
                    <img src={Add14} alt="Add1"  style={Img}/>
                    <img src={Add15} alt="Add2" style={Img}/>
                    <img src={Add16} alt="Add3" style={Img}/>
                    <img src={Add13} alt="Add4" style={Img}/>
              </div>
        </section>

        <section style={Sections}>  
            <h1 style={SeeMoreTitle}>Women</h1>
               <div style={limited}>
                  <img src={Add10} alt="Add1"  style={Img}/>
                  <img src={Add11} alt="Add2" style={Img}/>
                  <img src={Add12} alt="Add3" style={Img}/>
                  <img src={Add13} alt="Add4" style={Img}/>
              </div>
        </section>

        <section style={Sections}> 
            <h1 style={SeeMoreTitle}>Kids</h1>
              <div style={limited}>
                    <img src={Add14} alt="Add1"  style={Img}/>
                    <img src={Add15} alt="Add2" style={Img}/>
                    <img src={Add16} alt="Add3" style={Img}/>
                    <img src={Add13} alt="Add4" style={Img}/>
              </div>
        </section>
    </>
  )
}

export default Home