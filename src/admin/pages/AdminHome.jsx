import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import { useStateContext } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const AdminHome = () => {
  const navigate = useNavigate();
  const {getUser, user} = useStateContext();
  useEffect(() => {
    if (!user) {  
      getUser();
      navigate("/login")
    }else{
      navigate("/admin")
    }
  }, []);
  return (
    <div>
      <Sidebar />
      <div>
        <main>
          <div>Admin Home</div>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/*" element={<Navigate to="dashboard" />} />
          </Routes> 
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
