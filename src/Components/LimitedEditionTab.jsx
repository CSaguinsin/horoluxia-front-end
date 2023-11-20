import React from 'react';
import Navbar from './Navbar';
import Countdown from './Countdown';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

import Graphic from '../assets/LimitedEditions/LimitedEdition_Graphic.png'

function LimitedEditionTab() {
    const BgColor = {
        backgroundColor : "#DDCECF"
    };
    const Sections = {
        marginLeft: '40px',
        paddingTop: '50px',
        paddingBottom: '50px',
    };
    const SeeMoreTitle = {
        color: '#3F3937',
        fontSize: '5rem',
        fontWeight: 'bold',
        marginLeft: '50px',
        marginTop: '50px',
        fontFamily: 'DM Serif Display, serif',
        textAlign: 'center',
      };
  return (
    <>
    <header className="header">
        <p>Free shipping until 2025</p>
        <Countdown />
    </header>
      <Navbar />
<section style={BgColor}>
    <div>
        <img src={Graphic} alt="Limited Edition Graphic" />
    </div>
    <section style={Sections}>
            <h1 style={SeeMoreTitle}>Limited Edition's</h1>
    </section>
</section>
    </>
  )
}

export default LimitedEditionTab