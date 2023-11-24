import React from 'react';
import Account from '../assets/Logo/account.png'
import AddtoCart from '../assets/Logo/AddToCart.png' 
import CompanyLogo from '../assets/Logo/horoluxiaLogo.png'
import Horo from '../assets/Logo/horoluxia.png'
import { Link } from 'react-router-dom';
import '../Css/Style.css';
import { useStateContext } from "../context/ContextProvider";
import { useEffect } from "react";

function Navbar() {
  const { user, logout, getUser} = useStateContext();
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);
  return (
    <nav  className="border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <ul className="flex space-x-8">
            <li>
              <Link to='/' className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white" id='Fonts'>
                Home
              </Link>
            </li>
            <li>
            <Link to='/LimitedEdition' className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white" id='Fonts'>
                Limited Edition
              </Link>
            </li>

            <Link to='/MenWatchTab' className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white" id='Fonts'>
                Men
              </Link>

            <li>
            <Link to='/WomenWatchTab' className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white" id='Fonts'>
                Women
              </Link>
            </li>
            <li>
            <Link to='/KidsWatchTab' className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white" id='Fonts'>
                Kids
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center" style={{ paddingRight: '5rem' }}> 
          <Link to="/" className="flex items-center">
          <img src={Horo} className="logo" alt="Flowbite Logo" />
          </Link>
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
        {user ? (
          <>
            <Link>
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src={AddtoCart} className="h-7 mr-3" alt="Flowbite Logo" />
                Cart
              </span>
            </Link>
            <button
              onClick={logout}
              className="rounded py-2 pr-4 pl-3 text-black"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/LogIn"
              className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white"
              id="Fonts"
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src={Account} className="h-7 mr-3" alt="Flowbite Logo" />
                Sign Up
              </span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;