import React from 'react'
// Kids Watch
import KidsWatch1 from '../assets/KidsWatch/KidsWatch1.jpg';
import KidsWatch2 from '../assets/KidsWatch/KidsWatch2.jpg';
import KidsWatch3 from '../assets/KidsWatch/KidsWatch3.jpg';
import KidsWatch4 from '../assets/KidsWatch/KidsWatch4.jpg';

function Kids() {
    const ImgStyle = {
        height: '20rem',
        marginRight: '50px',
        width: '19rem',
    };

    const Width = {
        width: '100%',
    };
  return (
    <>
    <section className='FirstSection'>
<div style={ImgStyle} className="relative group cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl duration-500 hover:duration-700">
  <div>
    <img src={KidsWatch1} alt="Add1" />
  </div>
  <div style={Width} className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
  <span className="text-lime-400 font-bold text-xs">Kid's Watch</span>
    <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
    <p className="text-neutral-800">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</div>
</section>

<section className='FirstSection'>
<div style={ImgStyle} className="relative group cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl duration-500 hover:duration-700">
  <div>
    <img src={KidsWatch2} alt="Add1" />
  </div>
  <div style={Width} className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
  <span className="text-lime-400 font-bold text-xs">Kid's Watch</span>
    <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
    <p className="text-neutral-800">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</div>
</section>

<section className='FirstSection'>
<div style={ImgStyle} className="relative group cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl duration-500 hover:duration-700">
  <div>
    <img src={KidsWatch3} alt="Add1" />
  </div>
  <div style={Width} className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
  <span className="text-lime-400 font-bold text-xs">Kid's Watch</span>
    <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
    <p className="text-neutral-800">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</div>
</section>

<section className='FirstSection'>
<div style={ImgStyle} className="relative group cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl duration-500 hover:duration-700">
  <div>
    <img src={KidsWatch4} alt="Add1" />
  </div>
  <div style={Width} className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
  <span className="text-lime-400 font-bold text-xs">Kid's Watch</span>
    <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
    <p className="text-neutral-800">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</div>
</section>
    </>
  )
}

export default Kids