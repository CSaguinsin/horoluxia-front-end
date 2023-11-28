import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api/axios';
const EditCategory = () => {
    const navigate =  useNavigate();
    
    const [categoryInput, setCategory] = useState({
        slug: '',
        name: '',
        description: '',
        status: '',
        meta_title: '',
        meta_keywords: '',
        meta_description: '',

});
    const [error, setError] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`/api/edit-category/${id}`).then(res => {
            if(res.data.status === 200){
                setCategory(res.data.category);
            }else if (res.data.status === 404){
                new Swal({
                    title: "Error",
                    text: res.data.message,
                    icon: "Error",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/admin/view-category")
            }
        })
    }, [id, navigate]);

    const handleInput = (e) =>{
        e.persist();
        setCategory({...categoryInput, [e.target.name]: e.target.value});
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        const data = categoryInput;
        axios.put(`api/update-category/${id}`, data).then(res => {
            if(res.data.status === 200){
                setCategory(res.data.category);
                new Swal({
                    title: "Success",
                    text: res.data.message,
                    icon: "Success",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/admin/view-category")
                  setError([])
            }else if (res.data.status === 422){
                new Swal({
                    title: "Please fill all required fields",
                    text: "",
                    icon: "Error",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                setError(res.data.errors)
            }else if (res.data.status === 404){
                new Swal({
                    title: "Error",
                    text: res.data.message,
                    icon: "Error",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/admin/view-category")
            }
        })
    }
    return (
        <div className="flex md:flex-row w-screen">
          <div>
            <Sidebar />
          </div>
          <div className="m-10 shadow-md">
          <div className="flex justify-between h-24 justify-center items-center px-4 md:px-12 font-sans">
          <h1 className="text-2xl font-semibold">View Categories</h1>
          <div>
            <Link to="/admin/view-category">
            <Button className="flex items-center justify-center bg-matte">
              <IoMdArrowRoundBack className="h-6 w-6 mr-2" />
              BACK
            </Button>
            </Link>
          </div>
        </div>
            <form
              className="bg-white rounded pt-6 pb-8 mb-4 md:flex-row w-full px-24" 
              onSubmit={handleUpdate}
            >   
              <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-col gap-4">
                  <div className="w-96">
                    <Input label="Slug" name="slug" onChange={handleInput} value={categoryInput.slug}/>
                    <span>{error.slug}</span>
                  </div>
                  <div className="w-96">
                    <Input label="Name" name="name" onChange={handleInput} value={categoryInput.name}/>
                    <span>{error.name}</span>
                  </div>
                  <div className="w-96">
                    <Textarea label="Description" name="description" onChange={handleInput} value={categoryInput.description}/>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-96">
                    <Input label="Meta Title" name="meta_title" onChange={handleInput} value={categoryInput.meta_title}/>
                    <span>{error.meta_title}</span>
                  </div>
                  <div className="w-96">
                    <Input label="Meta Keywords" name="meta_keyword" onChange={handleInput} value={categoryInput.meta_keywords}/>
                  </div>
                  <div className="w-96">
                    <Textarea label="Description" name="meta_description"  onChange={handleInput} value={categoryInput.meta_description}/>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start  md:flex-row">
                <div className="w-96">
                  <Checkbox
                    label="Status"
                    name="status"
                    onChange={handleInput}
                    value={categoryInput.status}
                  />
                </div>
                <div className="w-full">
                  <Button fullWidth type="submit" >
                    Update
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
}

export default EditCategory