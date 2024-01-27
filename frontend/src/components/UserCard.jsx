import React from "react";
import ProfileLogo from "./ProfileLogo";
import { useNavigate } from "react-router-dom";
const UserCard = ({ firstName, lastName, username }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between border-zinc-400 px-4 py-2 my-2 rounded-lg border-2 items-center">
      <div className="flex items-center">
        <ProfileLogo />
        <p className="font-semibold">{firstName + " " + lastName}</p>
      </div>
      <div>
        <button
          className="px-4 py-2 bg-black text-white rounded-lg"
          onClick={() => navigate(`/send/${username}`)}
        >
          Send Money
        </button>
      </div>
    </div>
  );
};

export default UserCard;
