import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Navbar from './Navbar';
import Countdown from './Countdown';

function SignUp() { 
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const {register, errors} = useStateContext();

  const handleSignUp = async (e) => {
    e.preventDefault();
    register({firstname, lastname, email, password, password_confirmation});
  };

  return (
    <>
      <header className="header">
        <p>Free shipping until 2025</p>
        <Countdown />
      </header>
        <Navbar />
      <section className="bg-white-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="Title">HOROLUXIA REGISTER</h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
                {/* Form for First Name */}
                <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={firstname}
                    onChange={ev => setFirstname(ev.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    // required=""/\
                  />
                  {errors.firstname && <span>{errors.firstname[0]}</span>}
                </div>
                {/* Second Form for Last Name */}
                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastname}
                    onChange={ev => setLastame(ev.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                    // required=""
                  />
                  {errors.lastname && <span>{errors.lastname[0]}</span>}
                </div>
                {/* Third Form for Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    // required
                  />
                  {errors.email && <span>{errors.email[0]}</span>}
                </div>
                {/* Fourth form for password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // required
                  />
                  {errors.password && <span>{errors.password[0]}</span>}
                </div>
                {/* Fifth form for confirm password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    value={password_confirmation}
                    onChange={ev => setPasswordConfirmation(ev.target.value)}
                    placeholder="Confirm Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-yello-700 text-white font-medium focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create Account
                </button>
              </form>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/LogIn"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
