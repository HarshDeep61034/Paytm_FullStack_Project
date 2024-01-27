import React from "react";
import logo from "../assets/payit.png";
import ProfileLogo from "./ProfileLogo";
const Navbar = () => {
  return (
    <div className="flex bg-sky-500 rounded-md border-black border-2 m-2 text-white font-semibold items-center justify-between">
      <div>
        <img
          className="w-32 mx-2 rounded-lg border-2 border-black"
          src={logo}
        />
      </div>
      <div className="flex items-center">
        Hello, User
        <ProfileLogo />
      </div>
    </div>
  );
};

export default Navbar;
