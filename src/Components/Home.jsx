import { useEffect, useRef, useState } from "react";
import '../Css/Style.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import { useStateContext } from "../context/ContextProvider";
import Add10 from '../assets/Pictures/Add10.jpg';
import LimitedEdition from './LimitedEdition';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Countdown from './Countdown';
import SearchItem from "./SearchItem";


function Home() {
  
  const limited = {
    padding: '0 50px',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '20px',
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
    paddingTop: '50px',
  }

  const SeeMoreTitle = {
    color: 'black',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginLeft: '50px',
    marginTop: '50px',
    fontFamily: 'DM Serif Display, serif'
  };
  const { user, getUser} = useStateContext();
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);
  
  return (
    <>
      <header className="header">
        <p>Free shipping until 2025</p>
        <Countdown />
      </header>
        <Navbar />
    <section>
        <HeroSection />
        <SearchItem />

        <section style={Sections}> 
            <h1 style={SeeMoreTitle}>Limited Editions</h1>
              <div style={limited}>
                  <LimitedEdition />
              </div>
        </section>

        <section style={Sections}> 
            <h1 style={SeeMoreTitle}>Men</h1>
              <div style={limited}>
                  <Men />
              </div>
        </section>

        <section style={Sections}>  
            <h1 style={SeeMoreTitle}>Women</h1>
               <div style={limited}>
                  <Women />
              </div>
        </section>

        <section style={Sections}> 
            <h1 style={SeeMoreTitle}>Kids</h1>
              <div style={limited}>
                  <Kids />
              </div>
        </section>

        <section>
            <div className="hero min-h-screen">
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
        </section>
    </>
  )
}

export default Home