import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
const useUser = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const token = Cookies.get("token");
  useEffect(() => {
    axios
      .post("http://localhost:3000/api/v1/user/auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
        setLoading(false);
      });
  }, []);
  return { userData, loading };
};

export default useUser;
