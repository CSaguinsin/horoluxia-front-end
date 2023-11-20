import React from 'react'
import Add10 from '../assets/Pictures/Add10.jpg';
import Add11 from '../assets/Pictures/Add11.jpg';
import Add12 from '../assets/Pictures/Add12.jpeg';
import Add13 from '../assets/Pictures/Add13.jpg';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import '../Css/Style.css';


function LimitedEdition() {
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
          src={Add10}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Eclipse Embrace
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
          src={Add11}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Nebula Nexus
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
          src={Add12}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Timeless Odyssey
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
          src={Add13}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Celestial Elegance
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

export default LimitedEdition