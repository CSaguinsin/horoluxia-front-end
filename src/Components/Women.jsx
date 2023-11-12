import React from 'react'
// Women Watch
import WomensWatch1 from '../assets/WomensWatch/WomensWatch1.jpg';
import WomensWatch2 from '../assets/WomensWatch/WomensWatch2.jpg';
import WomensWatch3 from '../assets/WomensWatch/WomensWatch3.jpg';
import WomensWatch4 from '../assets/WomensWatch/WomensWatch4.jpg';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Women() {
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
          src={WomensWatch1}
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
          src={WomensWatch2}
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
          src={WomensWatch3}
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
          src={WomensWatch4}
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


export default Women