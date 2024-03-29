import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "../assets/payit.png";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
function Signup() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleSubmitBackend(data) {
    axios
      .post("http://localhost:3000/api/v1/user/signup", data)
      .then((res) => {
        if (res.data.token !== undefined) {
          Cookies.set("token", res.data.token);
        }
      })
      .then(() => navigate("/dashboard"))
      .catch((err) => {
        setError(err.response.data.message);
      });
  }
  return (
    <>
      <div className="h-screen flex flex-col md:flex-row">
        <div className="h-1/5 md:w-2/5 md:h-screen bg-blue-900 p-4 flex justify-center items-center">
          <img
            src={logo}
            className="w-3/5 rounded-lg cursor-pointer hover:scale-125 transition-all 300ms"
          />
        </div>
        <div className="h-4/5  md:w-3/5 md:h-auto bg-white p-8 flex justify-center items-center">
          <form
            onSubmit={handleSubmit((data) => handleSubmitBackend(data))}
            className="flex flex-col border-zinc-800 border-[1px] p-2 items-center rounded-lg"
          >
            <h1 className="text-center font-bold text-2xl">Sign Up</h1>
            <p className="text-slate-500 text-center">
              Enter Your information to create an account
            </p>
            <p className="text-red-600 underline"> {error && error}</p>
            <input
              type="text"
              name="firstName"
              {...register("firstName", { required: true })}
              placeholder="First Name"
              className="border-[1px] outline-none focus:bg-zinc-100 focus:border-sky-600 focus:border-2 border-slate-300 my-3 p-2 rounded-lg"
            />
            {errors.firstName && (
              <p className="text-red-600 underline">First name is required.</p>
            )}
            <input
              type="text"
              name="lastName"
              {...register("lastName", { required: true })}
              placeholder="Last Name"
              className="border-[1px] outline-none focus:bg-zinc-100 focus:border-sky-600 focus:border-2 border-slate-300 my-3 p-2 rounded-lg"
            />
            {errors.lastName && (
              <p className="text-red-600 underline">Last name is required.</p>
            )}

            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="border-[1px] outline-none focus:bg-zinc-100 focus:border-sky-600 focus:border-2 border-slate-300 my-3 p-2 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-600 underline">Email name is required.</p>
            )}

            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="border-[1px] outline-none focus:bg-zinc-100 focus:border-sky-600 focus:border-2 border-slate-300 my-3 p-2 rounded-lg"
            />
            {errors.password && (
              <p className="text-red-600 underline">Password is required.</p>
            )}

            <button
              type="submit"
              className="px-20 my-4 py-2 bg-blue-800 hover:bg-blue-700 active:bg-blue-900 text-white rounded-md"
            >
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <span
                className="cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
