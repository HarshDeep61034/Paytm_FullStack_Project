import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Users from "../components/Users";
import useUser from "../hooks/useUser";
import Cookies from "js-cookie";
const Dashboard = () => {
  const token = Cookies.get("token");
  const user = useUser();
  console.log(user);
  return (
    <div className="bg-[#EAEAEA] w-screen min-h-screen">
      <Navbar userid={user.userid} />
      <p className="font-bold mx-8 text-xl">Your balance: ₹ {user.balance}</p>
      <Users />
    </div>
  );
};

export default Dashboard;
