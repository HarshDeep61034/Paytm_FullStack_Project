import React from "react";
import { useForm } from "react-hook-form";
const Send = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="flex flex-col border-zinc-800 border-[1px] p-6 items-center rounded-lg"
        >
          <h1 className="text-center font-bold text-4xl my-5">Send Money</h1>
          <div className="flex items-center">
            <div className="rounded-[50%] w-24 h-24 flex justify-center items-center bg-green-500">
              <p className="text-white text-4xl font-bold">A</p>
            </div>
            <div className="font-bold text-2xl mx-3">Friend's Name</div>
          </div>
          <p className="font-semibold">Amount: (in Rs)</p>

          <input
            type="number"
            name="amount"
            min="50"
            {...register("amount", { required: true })}
            placeholder="Enter amount"
            className="border-[1px] outline-none focus:bg-zinc-100 focus:border-sky-600 focus:border-2 border-slate-300 my-3 p-2 rounded-lg"
          />
          {errors.amount && (
            <p className="text-red-600 underline">Amount is required.</p>
          )}

          <button
            type="submit"
            className="px-20 my-4 py-2 bg-green-500 hover:bg-green-400 active:bg-green-600 text-white rounded-md"
          >
            Initiate Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Send;
