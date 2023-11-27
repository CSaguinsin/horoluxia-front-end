import React from 'react'
import { useStateContext } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const {userToken} = useStateContext();
  if (!userToken) {
    navigate("/login"); 
  }else{
    navigate("/admin")
  }

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard