import React from "react";
import ProfileLogo from "./ProfileLogo";
const UserCard = () => {
  return (
    <div className="flex w-full justify-between border-zinc-400 px-4 py-2 my-2 rounded-lg border-2 items-center">
      <div className="flex items-center">
        <ProfileLogo />
        <p className="font-semibold">UserName</p>
      </div>
      <div>
        <button className="px-4 py-2 bg-black text-white rounded-lg">
          Send Money
        </button>
      </div>
    </div>
  );
};

export default UserCard;
