import React from "react";

const Categories = (select) => {
  return (
    <select className="h-14 focus:outline-none rounded-full text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
      <option value="all">All Categories</option>
      <option value="KidsWatch">Kids Watch</option>
      <option value="LimitedEditions">Limited Editions</option>
      <option value="MensWatch">Men's Watch</option>
      <option value="WomensWatch">Women's Watch</option>
    </select>
  );
};

export default Categories;
