import React from 'react'
// Kids Watch
import KidsWatch1 from '../assets/KidsWatch/KidsWatch1.jpg';
import KidsWatch2 from '../assets/KidsWatch/KidsWatch2.jpg';
import KidsWatch3 from '../assets/KidsWatch/KidsWatch3.jpg';
import KidsWatch4 from '../assets/KidsWatch/KidsWatch4.jpg';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Kids() {
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
          src={KidsWatch1}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Adventura Explorer
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
          src={KidsWatch2}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          CosmoComet Quest
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
          src={KidsWatch3}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Jubilee Sparkle
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
          src={KidsWatch4}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Whimsy Wonder
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

export default Kids