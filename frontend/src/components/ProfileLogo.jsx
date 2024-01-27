import React from "react";

const ProfileLogo = ({ userid }) => {
  return (
    <div className="rounded-[50%] border-2 border-black m-2 w-14 h-14 flex justify-center items-center bg-white">
      <p className="text-black text-xl font-bold">
        {userid ? userid[0].toUpperCase() : "A"}
      </p>
    </div>
  );
};

export default ProfileLogo;
