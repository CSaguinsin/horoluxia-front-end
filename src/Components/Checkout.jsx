import React, { useState, useEffect } from "react";
import StickyNavbar from "./Navbar";
import { useStateContext } from "../context/ContextProvider";
import axios from "../api/axios";
import {
  Input,
  Textarea,
  Checkbox,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import { LuAsterisk } from "react-icons/lu";
import { Card, Typography } from "@material-tailwind/react";
const Checkout = () => {
  const TABLE_HEAD = ["Product", "Price", "Qty", "Total"];

  var totalCartPrice = 0;
  const [cart, setCart] = useState([]);
  const { userToken, user } = useStateContext();
  if (!userToken) {
    new Swal({
      title: "Please Log in first",
      text: res.data.message,
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/login");
  }

  const [categoryInput, setCategory] = useState({
    slug: "",
    name: "",
    description: "",
    status: "",
    meta_title: "",
    meta_keywords: "",
    meta_description: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setCategory({ ...categoryInput, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios.get(`/api/cart`).then((res) => {
      if (res.data.status === 200) {
        setCart(res.data.cart);
      }
    });
  });
  return (
    <div>
      <StickyNavbar />
      <div className="w-full max-w-6xl mx-auto flex justify-center gap-2">
        <div className="w-3/5 shadow-md flex justify-center py-4">
          <form className="w-full max-w-lg">
            <div className="text-center text-xl font-poppins font-semibold mb-8">
              Basic Information
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  size="lg"
                  label="First Name"
                  name="firstname"
                  id="firstname"
                  value={user?.firstname}
                  autoFocus
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <Input
                  size="lg"
                  label="Last Name"
                  name="lastname"
                  id="lastname"
                  value={user?.lastname}
                  autoFocus
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <Input
                  size="lg"
                  label="Contact No."
                  name="contact"
                  id="contact"
                  autoFocus
                  className="font-poppins"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <Input
                  size="lg"
                  label="Email"
                  name="email"
                  id="email"
                  value={user?.email}
                  className="font-poppins"
                  autoFocus
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <Input
                  size="lg"
                  label="Shipping Address"
                  name="shipping_add"
                  id="shipping_add"
                  autoFocus
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  City
                </label>
                <input
                  className="appearance-none block w-full  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  State
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Zip
                </label>
                <input
                  className="appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="w-2/5">
          <Card className="md:96 py-4">
          <div className="text-center text-xl font-poppins font-semibold mb-8">
              Order Information
            </div>
            <table className="min-w-max table-auto text-center">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b bg-matte border-blue-gray-100 text-white p-4 text-center"
                    >
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal leading-none"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  totalCartPrice +=
                    item.product.selling_price * item.product_qty;
                  const isLast = index === cart.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-poppins text-left"
                        >
                          {item.product.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-poppins"
                        >
                          {item.product.selling_price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-poppins"
                        >
                          {item.product_qty}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-poppins"
                        >
                          {item.product.selling_price * item.product_qty}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan={2} className="text-left p-4 border-t border-blue-gray-50 font-poppins">Grand Total</td>
                  <td colSpan={2} className="p-4 border-t border-blue-gray-50 text-end font-poppins font-semibold text-2xl">{totalCartPrice}</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
