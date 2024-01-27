import React from "react";
import vector from "../assets/vector.png";
import axios from "axios";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
const Users = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (input.length > 0) {
      axios
        .get(`http://192.168.56.87:3000/api/v1/user/bulk?filter=${input}`)
        .then((res) => setUsers(res.data.users));
    }
  }, [input]);
  const elements = users.map((user, index) => (
    <UserCard
      key={index}
      firstName={user.firstName}
      lastName={user.lastName}
      username={user.username}
    />
  ));

  console.log(elements);

  return (
    <div className="mx-9 my-4">
      <h1 className="text-xl font-bold">Users</h1>
      <input
        type="text"
        className="my-4 w-full p-2 rounded-md outline-none border-[1px] border-slate-300 focus:border-slate-600 focus:bg-zinc-100"
        name="userid"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Users..."
      />
      <div className="mx-9 flex flex-col justify-center">
        {input.length == 0 && (
          <img src={vector} className="md:w-96 mx-auto md:my-20" />
        )}
        {/* Logic to Render userCard */}
        {input.length !== 0 && elements}
      </div>
    </div>
  );
};

export default Users;
