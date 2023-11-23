import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";

const AdminHome = () => {
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
