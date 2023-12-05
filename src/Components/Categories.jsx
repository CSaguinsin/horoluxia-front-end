import React from "react";
import { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import axios from "../api/axios";
const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);

  const handleInput = (e) => {
    e.persist();
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  const [productInput, setProductInput] = useState({
    category_id: "",
  });

  useEffect(() => {
    axios.get(`/api/all-category`).then((res) => {
      if (res.data.status === 200) {
        setCategoryList(res.data.category);
      }
    });
  }, []);
  return (
    // <select
    //   label="Select Category"
    //   name="category_id"
    //   placeholder="Select Category"
    //   onChange={handleInput}
    //   value={productInput.category_id}
    //   className="h-14 border-0 focus:outline-none rounded-full text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
    // >
    //   {categoryList.map((item) => {
    //     return (
    //       <option value={item.id} key={item.id}>
    //         {item.name}
    //       </option>
    //     );
    //   })}
    // </select>
    <select className="h-14 border-0 focus:outline-none rounded-full text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
      <option value="all">All Categories</option>
      <option value="KidsWatch">Kids Watch</option>
      <option value="LimitedEditions">Limited Editions</option>
      <option value="MensWatch">Men's Watch</option>
      <option value="WomensWatch">Women's Watch</option>
    </select>
  );
};

export default Categories;
