import React from "react";
import { Link } from "react-router-dom";
// import Signup from "./Signup";
import { useForm } from "react-hook-form"

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="px-2" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-black">
            <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </Link>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
          <h3 className="font-bold text-lg mb-4">Login</h3>
          <div className="form-control space-y-2">
            <h1>Email</h1>
            <input
             {...register("email", { required: true })}
              type="email"
              className="md:w-80 bg-white border-2 p-1 rounded-md"
              placeholder="enter your e-mail"
              />
              {errors.email && <span className="text-red-600">This field is required</span>}
            <h1>Password</h1>
            <input
             {...register("password", { required: true })}
              type="password"
              className="md:w-80 bg-white border-2 p-1 rounded-md"
              placeholder="password"
              />
              {errors.password && <span className="text-red-600">This field is required</span>}
            <div className="flex justify-evenly">
              <button type="submit" className="p-2 bg-pink-600 w-24 rounded-md hover:bg-pink-800 text-white" >
                Login
              </button>
              <p>
                Not Register?{" "}
                <Link
                  to={"/signup"}
                  className="underline text-blue-700"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                }
                >
                  Signup
                </Link>
              </p>
            </div>
          </div>
                    </form>
        </div>
      </dialog>
    </div>
  );
}
