import React from 'react'
// Kids Watch
import KidsWatch1 from '../assets/KidsWatch/KidsWatch1.jpg';
import KidsWatch2 from '../assets/KidsWatch/KidsWatch2.jpg';
import KidsWatch3 from '../assets/KidsWatch/KidsWatch3.jpg';
import KidsWatch4 from '../assets/KidsWatch/KidsWatch4.jpg';
import { IoIosCart } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
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
  <div className="w-full max-w-6xl mx-auto mb-12 ">
    <div className="flex justify-between items-center">
        <h1 className="text-4xl my-12 mb-8 font-extrabold titleHead" >Kids</h1>
        <Button
        variant="outlined"
                type="submit"
                className="rounded flex items-center justify-center gap-4 text-sm text-left bg-none border-none" 
              >
                View More
                <FaArrowRight  className="h-4 w-4 text-center" />
              </Button>
        </div>
    <div className="bg-[#FBF0E4]">
      <div class="flex gap-4 bg-[#FBF0E4] p-6">
        <div class="flex-1 text-gray-700 text-center bg-gray-400">
          <Card className="rounded-none p-2 bg-[#FBF0E4] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <CardHeader
              shadow={false}
              floated={false}
              className="rounded-none m-0"
            >
              <img src={KidsWatch1} alt="card-image" className="rounded-none" />
            </CardHeader>
            <CardBody className="p-2">
              <div className="flex flex-col items-start">
                <Typography color="blue-gray">Eclipse Embrace</Typography>
                <Typography color="blue-gray" className="font-bold text-2xl">
                  $95.00
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="w-full  p-0">
              <Button
                type="submit"
                className="py-4 rounded-full flex items-center justify-center gap-4 text-sm text-left p-2 w-full"
              >
                <IoIosCart className="h-6 w-6 rounded-full text-center" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div class="flex-1 text-gray-700 text-center bg-gray-400">
        <Card className="rounded-none p-2 bg-[#FBF0E4] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <CardHeader
              shadow={false}
              floated={false}
              className="rounded-none m-0"
            >
              <img src={KidsWatch2} alt="card-image" className="rounded-none" />
            </CardHeader>
            <CardBody className="p-2">
              <div className="flex flex-col items-start">
                <Typography color="blue-gray">Eclipse Embrace</Typography>
                <Typography color="blue-gray" className="font-bold text-2xl">
                  $95.00
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="w-full  p-0">
              <Button
                type="submit"
                className="py-4 rounded-full flex items-center justify-center gap-4 text-sm text-left p-2 w-full"
              >
                <IoIosCart className="h-6 w-6 rounded-full text-center" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div class="flex-1 text-gray-700 text-center bg-gray-400">
        <Card className="rounded-none p-2 bg-[#FBF0E4] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <CardHeader
              shadow={false}
              floated={false}
              className="rounded-none m-0"
            >
              <img src={KidsWatch3} alt="card-image" className="rounded-none" />
            </CardHeader>
            <CardBody className="p-2">
              <div className="flex flex-col items-start">
                <Typography color="blue-gray">Eclipse Embrace</Typography>
                <Typography color="blue-gray" className="font-bold text-2xl">
                  $95.00
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="w-full  p-0">
              <Button
                type="submit"
                className="py-4 rounded-full flex items-center justify-center gap-4 text-sm text-left p-2 w-full"
              >
                <IoIosCart className="h-6 w-6 rounded-full text-center" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div class="flex-1 text-gray-700 text-center bg-gray-400">
        <Card className="rounded-none p-2 bg-[#FBF0E4] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <CardHeader
              shadow={false}
              floated={false}
              className="rounded-none m-0"
            >
              <img src={KidsWatch4} alt="card-image" className="rounded-none" />
            </CardHeader>
            <CardBody className="p-2">
              <div className="flex flex-col items-start">
                <Typography color="blue-gray">Eclipse Embrace</Typography>
                <Typography color="blue-gray" className="font-bold text-2xl">
                  $95.00
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="w-full  p-0">
              <Button
                type="submit"
                className="py-4 rounded-full flex items-center justify-center gap-4 text-sm text-left p-2 w-full"
              >
                <IoIosCart className="h-6 w-6 rounded-full text-center" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
}

export default Kids