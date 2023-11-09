import React from 'react'
import { useEffect, useRef, useState } from "react";
import '../Css/Style.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CompanyLogo from '../assets/Logo/horoluxiaLogo.png'

import Add10 from '../assets/Pictures/Add10.jpg';
import Add11 from '../assets/Pictures/Add11.jpg';
import Add12 from '../assets/Pictures/Add12.jpeg';
import Add13 from '../assets/Pictures/Add13.jpg';
import Add14 from '../assets/Pictures/Add14.jpg';
import Add15 from '../assets/Pictures/Add15.jpg';
import Add16 from '../assets/Pictures/Add16.jpg';

// Kids Watch
import KidsWatch1 from '../assets/KidsWatch/KidsWatch1.jpg';
import KidsWatch2 from '../assets/KidsWatch/KidsWatch2.jpg';
import KidsWatch3 from '../assets/KidsWatch/KidsWatch3.jpg';
import KidsWatch4 from '../assets/KidsWatch/KidsWatch4.jpg';

// Women Watch
import WomensWatch1 from '../assets/WomensWatch/WomensWatch1.jpg';
import WomensWatch2 from '../assets/WomensWatch/WomensWatch2.jpg';
import WomensWatch3 from '../assets/WomensWatch/WomensWatch3.jpg';
import WomensWatch4 from '../assets/WomensWatch/WomensWatch4.jpg';

// Men Watch
import MenWatch1 from '../assets/MensWatch/MensWatches1.jpg';
import MenWatch2 from '../assets/MensWatch/MensWatches2.jpg';
import MenWatch3 from '../assets/MensWatch/MensWatches3.jpg';
import MenWatch4 from '../assets/MensWatch/MensWatches4.jpg';


function Home() {
  
  const limited = {
    padding: '0 50px',
    display: 'flex',
    flexDirection: 'row',
  };

  const Img = {
    height: '25rem',
    marginRight: '50px',
    width: '19.5rem',
  };

  const SecondStyleWatch ={
    height: '27rem',
    marginRight: '62px',
    width: '29rem',
  }

  const Sections = {
    marginLeft: '40px',
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
                    <img src={MenWatch1} alt="Add1" style={SecondStyleWatch}/>
                    <img src={MenWatch2} alt="Add2" style={SecondStyleWatch}/>
                    <img src={MenWatch3} alt="Add3" style={SecondStyleWatch}/>
                    <img src={MenWatch4} alt="Add4" style={SecondStyleWatch}/>
              </div>
        </section>

        <section style={Sections}>  
            <h1 style={SeeMoreTitle}>Women</h1>
               <div style={limited}>
                  <img src={WomensWatch1} alt="Add1"  style={SecondStyleWatch}/>
                  <img src={WomensWatch2} alt="Add2" style={SecondStyleWatch}/>
                  <img src={WomensWatch3} alt="Add3" style={SecondStyleWatch}/>
                  <img src={WomensWatch4} alt="Add4" style={SecondStyleWatch}/>
              </div>
        </section>

        <section style={Sections}> 
            <h1 style={SeeMoreTitle}>Kids</h1>
              <div style={limited}>
                    <img src={KidsWatch1} alt="Add1"  style={Img}/>
                    <img src={KidsWatch2} alt="Add2" style={Img}/>
                    <img src={KidsWatch3} alt="Add3" style={Img}/>
                    <img src={KidsWatch4} alt="Add4" style={Img}/>
              </div>
        </section>

        <section>
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Add10} />
                <div>
                  <h1 className="text-5xl font-bold" id='HeroTitle'>Get 5% Cash Back</h1>
                  <p className="py-6" id='Fonts'>
                        Earn 5% cash back on everyday purchases <br /> a smart way to save and enjoy extra money in your pocket!
                  </p>
                  <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
        </section>

        <section>
              <footer className="footer p-10 bg-base-200 text-base-content">
                <aside  id='Fonts'>
                  <img src={CompanyLogo} className="logo" />
                  <p>Horoluxia<br/>Providing reliable watch since 1992</p>
                </aside> 
                <nav>
                  <header className="footer-title"  id='Fonts'>Services</header> 
                  <a className="link link-hover"  id='Fonts'>Branding</a> 
                  <a className="link link-hover"  id='Fonts'>Design</a> 
                  <a className="link link-hover"  id='Fonts'>Marketing</a> 
                  <a className="link link-hover"  id='Fonts'>Advertisement</a>
                </nav> 
                <nav>
                  <header className="footer-title"  id='Fonts'>Company</header> 
                  <a className="link link-hover"  id='Fonts'>About us</a> 
                  <a className="link link-hover"  id='Fonts'>Contact</a> 
                  <a className="link link-hover"  id='Fonts'>Jobs</a> 
                  <a className="link link-hover"  id='Fonts'>Press kit</a>
                </nav> 
                <nav>
                  <header className="footer-title"  id='Fonts'>Legal</header> 
                  <a className="link link-hover"  id='Fonts'>Terms of use</a> 
                  <a className="link link-hover"  id='Fonts'>Privacy policy</a> 
                  <a className="link link-hover"  id='Fonts'>Cookie policy</a>
                </nav>
              </footer>
        </section>
    </>
  )
}

export default Home