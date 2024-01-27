import React from "react";
import vector from "../assets/vector.png";
import UserCard from "./UserCard";
const Users = () => {
  return (
    <div className="mx-9 my-4">
      <h1 className="text-xl font-bold">Users</h1>
      <input
        type="text"
        className="my-4 w-full p-2 rounded-md outline-none border-[1px] border-slate-300 focus:border-slate-600 focus:bg-zinc-100"
        name="userid"
        placeholder="Search Users..."
      />
      <div className="mx-9 flex flex-col justify-center">
        {/* <img src={vector} className="md:w-96 md:my-20" /> */}
        {/* Logic to Render userCard */}
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default Users;
