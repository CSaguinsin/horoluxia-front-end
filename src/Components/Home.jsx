import { useEffect, useRef, useState } from "react";
import "../Css/Style.css";
import StickyNavbar from "./Navbar";
import HeroSection from "./HeroSection";
import { useStateContext } from "../context/ContextProvider";
import LimitedEdition from "./LimitedEdition";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import Countdown from "./Countdown";
import SearchItem from "./SearchItem";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
function Home() {
  const { user, getUser } = useStateContext();
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(`/api/get-category`).then((res) => {
      if (res.data.status === 200) {
        setCategory(res.data.category);
      }
    });
  });

  return (
    <div>
      <header className="header">
        <Countdown />
      </header>
      <StickyNavbar />
      <section>
        <HeroSection />
        <SearchItem />
      </section>
      <div>
  {
    category.map((item , idx) => {
      return (
        <div className="bg-[#FBF0E4] w-full max-w-6xl mx-auto m-12 ">
        <div class="flex gap-4 bg-[#FBF0E4] p-6">
          <div class="flex-1 text-gray-700 text-center bg-gray-400">
            <Card className="rounded-none p-2 bg-[#FBF0E4]">
            <CardHeader
                shadow={false}
                floated={false}
                className="rounded-none m-0"
              >
                <img />
              </CardHeader>
              <CardBody className="p-2">
                <div className="flex flex-col items-start">
                  <Link to= {`/${item.slug}`}>
                  <Typography color="blue-gray">{item.name}</Typography>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
          </div>
        </div>
      );
    })
  }
</div>

      <section>
        <LimitedEdition />
      </section>

      <section>
        <Men />
      </section>

      <section>
        <Women />
      </section>

      <section>
        <Kids />
      </section>

      {/* <section>
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
        </section> */}
    </div>
  );
}

export default Home;
