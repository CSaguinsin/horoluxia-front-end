import React from 'react'
import Add10 from '../assets/Pictures/Add10.jpg';
import Add11 from '../assets/Pictures/Add11.jpg';
import Add12 from '../assets/Pictures/Add12.jpeg';
import Add13 from '../assets/Pictures/Add13.jpg';


function LimitedEdition() {
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
  <div style={ImgStyle} id='Fonts' className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img
      className="h-48 w-full object-cover object-center"
      src={Add10}
      alt="Product Image"
    />
    <div className="p-4">
      <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
        Horoluxia
      </h2>
      <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
        Product description goes here.
      </p>
      <div className="flex items-center">
        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
          $20.00
        </p>
        <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
          $25.00
        </p>
        <p className="ml-auto text-base font-medium text-green-500">20% off</p>
      </div>
    </div>
  </div>
</section>

<section className='FirstSection'>
  <div style={ImgStyle} id='Fonts' className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img
      className="h-48 w-full object-cover object-center"
      src={Add11}
      alt="Product Image"
    />
    <div className="p-4">
      <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
        Product Name
      </h2>
      <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
        Product description goes here.
      </p>
      <div className="flex items-center">
        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
          $20.00
        </p>
        <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
          $25.00
        </p>
        <p className="ml-auto text-base font-medium text-green-500">20% off</p>
      </div>
    </div>
  </div>
</section>

<section className='FirstSection'>
  <div style={ImgStyle} id='Fonts' className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img
      className="h-48 w-full object-cover object-center"
      src={Add12}
      alt="Product Image"
    />
    <div className="p-4">
      <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
        Product Name
      </h2>
      <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
        Product description goes here.
      </p>
      <div className="flex items-center">
        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
          $20.00
        </p>
        <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
          $25.00
        </p>
        <p className="ml-auto text-base font-medium text-green-500">20% off</p>
      </div>
    </div>
  </div>
</section>

<section className='FirstSection'>
  <div style={ImgStyle} id='Fonts' className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img
      className="h-48 w-full object-cover object-center"
      src={Add13}
      alt="Product Image"
    />
    <div className="p-4">
      <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
        Product Name
      </h2>
      <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
        Product description goes here.
      </p>
      <div className="flex items-center">
        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
          $20.00
        </p>
        <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
          $25.00
        </p>
        <p className="ml-auto text-base font-medium text-green-500">20% off</p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default LimitedEdition