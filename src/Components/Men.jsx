import React from 'react'
import MenWatch1 from '../assets/MensWatch/MensWatches1.jpg';
import MenWatch2 from '../assets/MensWatch/MensWatches2.jpg';
import MenWatch3 from '../assets/MensWatch/MensWatches3.jpg';
import MenWatch4 from '../assets/MensWatch/MensWatches4.jpg';


function Men() {
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
      src={MenWatch1}
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
      src={MenWatch2}
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
      src={MenWatch3}
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
      src={MenWatch4}
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

export default Men