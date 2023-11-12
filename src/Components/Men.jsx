import React from 'react'
import MenWatch1 from '../assets/MensWatch/MensWatches1.jpg';
import MenWatch2 from '../assets/MensWatch/MensWatches2.jpg';
import MenWatch3 from '../assets/MensWatch/MensWatches3.jpg';
import MenWatch4 from '../assets/MensWatch/MensWatches4.jpg';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


function Men() {
    const ImgStyle = {
      height: '30rem',
      marginRight: '50px',
      width: '19rem',
  };
  const Width = {
      width: '100%',
  };
  return (
    <>
<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={MenWatch1}
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
</section>


<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={MenWatch2}
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
</section>

<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={MenWatch3}
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
</section>

<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={MenWatch4}
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
</section>
    </>
  )
}

export default Men