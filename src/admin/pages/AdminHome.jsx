import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import { useStateContext } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import Category from "../components/Category";
const AdminHome = () => {
  // const navigate = useNavigate();
  // const {userToken} = useStateContext();
  // if (!userToken) {
  //   navigate("/login"); 
  // }else{
  //   navigate("/admin/*")
  // }

  return (
    <div>
      <div>
        <main>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="category" element={<Category />} />
            <Route path="/*" element={<Navigate to="dashboard" />} />
          </Routes> 
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
