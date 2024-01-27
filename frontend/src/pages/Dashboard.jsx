import React from "react";
import Navbar from "../components/Navbar";
import Users from "../components/Users";
const Dashboard = () => {
  return (
    <div className="bg-[#EAEAEA] w-screen min-h-screen">
      <Navbar />
      <p className="font-bold mx-8 text-xl">Your balance: ₹ 10,000</p>
      <Users />
    </div>
  );
};

export default Dashboard;
