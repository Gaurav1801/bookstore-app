import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="bg-white flex justify-center items-center h-screen">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div id="my_modal" className="">
          <div className="modal-box bg-white text-black space-y-4 md:w-[500px] border rounded-md">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to={"/"}>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </Link>
            <h3 className="font-bold text-lg">SignUp</h3>
            <div className="form-control space-y-2">
              <h1>Name</h1>
              <input
               {...register("name", { required: true })}
                type="text"
                className="md:w-80 bg-white border-2 p-1 rounded-md"
                placeholder="enter your Fullname"
              />
              {errors.name && <span className="text-red-600">This field is required</span>}

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

              <div className="flex justify-evenly pt-4">
                <button className="p-2 bg-pink-600 w-24 rounded-md hover:bg-pink-800 text-white">
                  SignUp
                </button>
                <p>
                  Have account{" "}
                  <button
                    className="underline text-blue-700"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}