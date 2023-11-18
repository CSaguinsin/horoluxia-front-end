import React from 'react';
import Account from '../assets/Logo/account.png'
import AddtoCart from '../assets/Logo/AddToCart.png' 
import CompanyLogo from '../assets/Logo/horoluxiaLogo.png'
import Horo from '../assets/Logo/horoluxia.png'
import { Link } from 'react-router-dom';
import '../Css/Style.css';

function Navbar() {
  return (
    <nav  className="border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <ul className="flex space-x-8">
            <li>
              <Link to='/' className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white" id='Fonts'>
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white"
                id='Fonts'>
                Home
              </a>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white"
             id='Fonts' >
                Limited Edition
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover-bg-gray-100 hover-text-blue-700 dark-hover-bg-gray-700 dark-hover-text-white"
                id='Fonts'>
                Men
              </a>
            </li>
            <li>
            <Link to='/WomenWatchTab' className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white" id='Fonts'>
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white"
                id='Fonts'>
                Women
              </a>
              </Link>
            </li>
            <li>
            <Link to='/KidsWatchTab' className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white" id='Fonts'>
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white"
                id='Fonts'>
                Kids
              </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center" style={{ paddingRight: '5rem' }}> 
          <a className="flex items-center">
          <img src={Horo} className="logo" alt="Flowbite Logo" />
          </a>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover-bg-gray-100 focus-outline-none focus-ring-2 focus-ring-gray-200 dark-text-gray-400 dark-hover-bg-gray-700 dark-focus-ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <Link to='/LogIn' className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white" id='Fonts'>
        <a
          href="#"
          className="text-gray-900 hover-bg-gray-100 hover-text-blue-700 dark-hover-bg-gray-700 dark-hover-text-white"
          id='Fonts'
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Account} className="h-7 mr-3" alt="Flowbite Logo" />
            Account
          </span>
        </a>
        </Link>
        <a
          href="#"
          className="text-gray-900 hover-bg-gray-100 hover-text-blue-700 dark-hover-bg-gray-700 dark-hover-text-white"
          id='Fonts'
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <img src={AddtoCart} className="h-7 mr-3" alt="Flowbite Logo" />
            Add To Cart
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
