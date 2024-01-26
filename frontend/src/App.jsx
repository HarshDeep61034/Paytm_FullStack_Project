import logo from "./assets/payit.png";
function App() {
  return (
    <>
      <div className="h-screen flex flex-col md:flex-row">
        <div className="h-1/5 md:w-2/5 md:h-screen bg-blue-900 p-4 flex justify-center items-center">
          <img
            src={logo}
            className="w-3/5 rounded-lg cursor-pointer hover:scale-125 transition-all 300ms"
          />
        </div>
        <div className="h-4/5 md:w-3/5 md:h-auto bg-white p-8">
          <form className="flex flex-col border-zinc-800 border-[1px] p-2 items-center rounded-lg">
            <h1 className="text-center font-bold text-2xl">Sign Up</h1>
            <p className="text-slate-500 text-center">
              Enter Your information to create an account
            </p>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border-[1px] border-slate-300 my-3 p-2 rounded-lg"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border-[1px] border-slate-300 my-3 p-2 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-[1px] border-slate-300 my-3 p-2 rounded-lg"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-[1px] border-slate-300 my-3 p-2 rounded-lg"
            />
            <button className="px-32 py-2 bg-zinc-900 text-white rounded-md">
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <span className="hover:underline">Login</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
