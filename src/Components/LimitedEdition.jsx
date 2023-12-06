import React from "react";
import { Link } from "react-router-dom";
import Add9 from "../assets/Pictures/Add9.jpg";
import Add11 from "../assets/Pictures/Add11.jpg";
import Add12 from "../assets/Pictures/Add12.jpeg";
import Add13 from "../assets/Pictures/Add13.jpg";
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
import "../Css/Style.css";

function LimitedEdition() {
  return (
    <div className="w-full max-w-6xl mx-auto mb-12 ">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl my-12 mb-8 font-extrabold titleHead">
          Limited Editions
        </h1>
        <Link to="/LimitedEdition">
        <Button
          variant="outlined"
          type="submit"
          className="rounded flex items-center justify-center gap-4 text-sm text-left bg-none border-none"
        >
          View More
          <FaArrowRight className="h-4 w-4 text-center" />
        </Button>
        </Link>
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
                <img src={Add9} alt="card-image" className="rounded-none" />
              </CardHeader>
              <CardBody className="p-2">
                <div className="flex flex-col items-start">
                  <Typography color="blue-gray">Eclipse Embrace</Typography>
                  <Typography color="blue-gray" className="font-bold text-2xl">
                    $95.00
                  </Typography>
                </div>
              </CardBody>
            </Card>
          </div>
          <div class="flex-1 text-gray-700 text-center bg-gray-400">
            <Card className="rounded-none p-2 bg-[#FBF0E4] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <CardHeader
                shadow={false}
                floated={false}
                className="rounded-none m-0"
              >
                <img src={Add11} alt="card-image" className="rounded-none" />
              </CardHeader>
              <CardBody className="p-2">
                <div className="flex flex-col items-start">
                  <Typography color="blue-gray">Eclipse Embrace</Typography>
                  <Typography color="blue-gray" className="font-bold text-2xl">
                    $95.00
                  </Typography>
                </div>
              </CardBody>
            </Card>
          </div>
          <div class="flex-1 text-gray-700 text-center bg-gray-400">
            <Card className="rounded-none p-2 bg-[#FBF0E4] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <CardHeader
                shadow={false}
                floated={false}
                className="rounded-none m-0"
              >
                <img src={Add12} alt="card-image" className="rounded-none" />
              </CardHeader>
              <CardBody className="p-2">
                <div className="flex flex-col items-start">
                  <Typography color="blue-gray">Eclipse Embrace</Typography>
                  <Typography color="blue-gray" className="font-bold text-2xl">
                    $95.00
                  </Typography>
                </div>
              </CardBody>
            </Card>
          </div>
          <div class="flex-1 text-gray-700 text-center bg-gray-400">
            <Card className="rounded-none p-2 bg-[#FBF0E4] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <CardHeader
                shadow={false}
                floated={false}
                className="rounded-none m-0"
              >
                <img src={Add13} alt="card-image" className="rounded-none" />
              </CardHeader>
              <CardBody className="p-2">
                <div className="flex flex-col items-start">
                  <Typography color="blue-gray">Eclipse Embrace</Typography>
                  <Typography color="blue-gray" className="font-bold text-2xl">
                    $95.00
                  </Typography>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimitedEdition;
