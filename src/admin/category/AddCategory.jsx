import React, { useState, useEffect } from "react";
import Sidebar from '../components/Sidebar'
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from "../../api/axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';
const AddCategory = () => {
  // const navigate = useNavigate();
  // const { userToken } = useStateContext();

  // useEffect(() => {
  //   if (!userToken) {
  //     navigate('/login');
  //   } else {
  //     navigate('/admin');
  //   }
  // }, [userToken, navigate]);
  
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
    <div className="flex md:flex-row w-screen">
      <div>
        <Sidebar />
      </div>
      <div className="m-10 shadow-md">
        <div className="text-center flex justify-center">
          <h2 className="text-4xl font-semibold font-sans">CATEGORY</h2>
        </div>
        <form
          className="bg-white rounded pt-6 pb-8 mb-4 md:flex-row w-full px-24" 
          onSubmit={handleSubmit}
        >   
          <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex flex-col gap-4">
              <div className="w-96 relative">
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
                <Textarea label="Description" name="meta_description"  onChange={handleInput} value={categoryInput.meta_description || ''}/>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start  md:flex-row">
            <div className="w-96">
              <Checkbox
                label="Show"
                name="status"
                onChange={handleInput}
                value={categoryInput.status}
              />
            </div>
            <div className="w-full">
              <Button fullWidth type="submit" >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;