import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import axios from "../../api/axios";
import Swal from "sweetalert2";
const Category = () => {
    const  [categoryInput, setCategory] = useState({
        slug: '',
        name: '',
        description: '',
        status: '',
        meta_title: '',
        meta_keywords: '',
        meta_description: '',
        error_list: [],
})

    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        console.log("click")
        console.log(document.getElementById('CATEGORY_FORM'));
        e.preventDefault();
        const data = {
            slug:categoryInput.slug,
            name:categoryInput.name,
            description:categoryInput.description,
            status:categoryInput.status,
            meta_title:categoryInput.meta_title,
            meta_keywords:categoryInput. meta_keywords, 
            meta_description:categoryInput.meta_description,
        }
        axios.get("/sanctum/csrf-cookie");
        axios.post(`/api/store-category`, data).then(res => {
            
            if(res.data.status === 200){
                new Swal({
                    title: "Success",
                    text: res.data.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                setCategory({
                    slug: '',
                    name: '',
                    description: '',
                    status: '',
                    meta_title: '',
                    meta_keywords: '',
                    meta_description: '',
                    error_list: [],
                  });
            }else if(res.data.status === 400){
                setCategory({...categoryInput, error_list:res.data.errors});
            }
        });
    }
  return (
    <div className="flex ">
      <div>
        <Sidebar />
      </div>
      <div className="w-full m-10 shadow-md ">
        <div className="text-center flex justify-center">
            <h2 className="text-4xl font-semibold font-sans">CATEGORY</h2>
        </div>
        {/* {
            display_errors.map((item) => {
                return (<p>{item}</p>)
            })
        } */}
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 "  onSubmit={handleSubmit}>
          <div className="flex gap-4 justify-center">
            <div className="flex flex-col gap-4">
              <div className="w-96">
                <Input label="Slug" name="slug" onChange={handleInput} value={categoryInput.slug}/>
                <span>{categoryInput.error_list.slug}</span>
              </div>
              <div className="w-96">
                <Input label="Name" name="name" onChange={handleInput} value={categoryInput.name}/>
                <span>{categoryInput.error_list.name}</span>
              </div>
              <div className="w-96">
                <Textarea label="Description" name="description" onChange={handleInput} value={categoryInput.description}/>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="w-96">
                <Input label="Meta Title" name="meta_title" onChange={handleInput} value={categoryInput.meta_title}/>
                <span>{categoryInput.error_list.meta_title}</span>
              </div>
              <div className="w-96">
                <Input label="Meta Keywords" name="meta_keywords" onChange={handleInput} value={categoryInput.meta_keywords}/>
              </div>
              <div className="w-96">
                <Textarea label="Description" name="meta_description"  onChange={handleInput} value={categoryInput.meta_description}/>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mx-20">
            <div className="flex flex-row justify-center text-center ">
                <label>Status</label>
                <Checkbox label="Remember Me" name="status" onChange={handleInput} checked={categoryInput.status}/> 
            </div>
           
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Category;
