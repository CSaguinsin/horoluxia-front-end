import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
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
<<<<<<< HEAD
import LastSection from '../assets/Logo/LastSection.png';
=======
>>>>>>> dc3e1736396ea69ce38bbe24a1298e05edc47fd4


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

  const DivBg = {
    backgroundColor: '#DADDE2',
    paddingBottom: '50px',
  };
  
  return (
    <>
      <header className="header">
        <p>Free shipping until 2025</p>
        <Countdown />
      </header>
        <Navbar />
    <section>
      <div style={DivBg}>
        <HeroSection />
        <SearchItem />
<<<<<<< HEAD
      </div>
=======

>>>>>>> dc3e1736396ea69ce38bbe24a1298e05edc47fd4
        <section style={Sections}> 
            <h1 style={SeeMoreTitle}>
              <Link to='/LimitedEdition'>
                Limited Editions
              </Link>
            </h1>  
              <div style={limited}>
                  <LimitedEdition />
              </div>
        </section>

        <section style={Sections}> 
            <h1 style={SeeMoreTitle}>
                <Link to='/MenWatchTab'>
                Men
                </Link>
            </h1>
              <div style={limited}>
                  <Men />
              </div>
        </section>

        <section style={Sections}>  
            <h1 style={SeeMoreTitle}>
                <Link to='/WomenWatchTab'>
                Women
                </Link>
            </h1>
               <div style={limited}>
                  <Women />
              </div>
        </section>

        <section style={Sections}> 
            <h1 style={SeeMoreTitle}>
                <Link to='/KidsWatchTab'>
                Kids
                </Link>
            </h1>
              <div style={limited}>
                  <Kids />
              </div>
        </section>

        <section>
           <img src={LastSection} alt="LastSection" style={{width: '100%'}}/>
        </section>
        </section>
    </>
  )
}

export default Home