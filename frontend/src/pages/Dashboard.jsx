import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Users from "../components/Users";
import axios from "axios";
import Cookies from "js-cookie";

const Dashboard = () => {
  const token = Cookies.get("token");
  const [user, setuser] = useState({});
  useEffect(() => {
    axios
      .get("http://192.168.56.87:3000/api/v1/account/balance", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Custom-Header": "Custom-Value",
          // Add any other headers as needed
        },
      })
      .then((res) => setuser(res.data));
  }, []);
  return (
    <div className="bg-[#EAEAEA] w-screen min-h-screen">
      <Navbar userid={user.userid} />
      <p className="font-bold mx-8 text-xl">Your balance: ₹ {user.balance}</p>
      <Users />
    </div>
  );
};

export default Dashboard;
