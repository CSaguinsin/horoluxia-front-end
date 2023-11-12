import React from 'react'
// Women Watch
import WomensWatch1 from '../assets/WomensWatch/WomensWatch1.jpg';
import WomensWatch2 from '../assets/WomensWatch/WomensWatch2.jpg';
import WomensWatch3 from '../assets/WomensWatch/WomensWatch3.jpg';
import WomensWatch4 from '../assets/WomensWatch/WomensWatch4.jpg';

function Women() {
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
      src={WomensWatch1}
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
      src={WomensWatch2}
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
      src={WomensWatch3}
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
      src={WomensWatch4}
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


export default Women