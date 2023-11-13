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

import Womens_1 from '../assets/WomensWatch/Womens_Watches/Womens_1.jpg';
import Womens_2 from '../assets/WomensWatch/Womens_Watches/Womens_2.jpg';
import Womens_3 from '../assets/WomensWatch/Womens_Watches/Womens_3.jpg';
import Womens_4 from '../assets/WomensWatch/Womens_Watches/Womens_4.jpg';
import Womens_5 from '../assets/WomensWatch/Womens_Watches/Womens_5.jpg';


import WomensGraphic_1 from '../assets/WomensWatch/GraphicDesign/WomensGraphic_1.png';
import WomensGraphic_2 from '../assets/WomensWatch/GraphicDesign/WomensGraphic_2.png';
import WomensGraphic_3 from '../assets/WomensWatch/GraphicDesign/WomensGraphic_3.png';
import WomensGraphic_4 from '../assets/WomensWatch/GraphicDesign/WomensGraphic_4.png';

function WomenWatchTab() {
    const ImgSize = {
        height: '50rem',
    }
    const SeeMoreTitle = {
        color: 'black',
        fontSize: '3rem',
        fontWeight: 'bold',
        marginLeft: '50px',
        marginTop: '50px',
        fontFamily: 'DM Serif Display, serif'
      };
      const Sections = {
        marginLeft: '40px',
        paddingTop: '50px',
      }
        const ImgStyle = {
          height: '30rem',
          marginRight: '50px',
          width: '19rem',
      };
  return (
    <>
      <header className="header">
        <p>Free shipping until 2025</p>
        <Countdown />
      </header>
      <Navbar />

      <section>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
            <img style={ImgSize} src={WomensGraphic_1} alt="Slide 1" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full flex justify-center items-center">
            <img style={ImgSize}  src={WomensGraphic_2} alt="Slide 2" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full flex justify-center items-center">
            <img style={ImgSize}  src={WomensGraphic_3} alt="Slide 3" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full flex justify-center items-center">
            <img style={ImgSize}  src={WomensGraphic_4} alt="Slide 4" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={Sections}> 
            <h1 style={SeeMoreTitle}>Womens</h1>
            <div style={ImgStyle} id='Fonts' className='FirstSection'>
                <Card style={ImgStyle} id='Fonts' className="w-96">
                    <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                        src={Womens_1}
                        alt="card-image"
                        className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                            Apple AirPods
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            $95.00
                        </Typography>
                        </div>
                        <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                        >
                        With plenty of talk and listen time, voice-activated Siri access, and
                        an available wireless charging case.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                        Add to Cart
                        </Button>
                    </CardFooter>
                    </Card>
            </div>
      </section>
      
      
    </>
  );
}

export default WomenWatchTab;
