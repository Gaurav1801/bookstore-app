import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Signup from "./Signup";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/user/login", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successfully!!!");
          navigate(from, { replace: true });
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("User", JSON.stringify(res.data.user));
            document.getElementById("my_modal_3").close();
          }, 3000);
        }
      })
      .catch((err) => {
        // console.log(err.response.data.error);

        toast.error("error: " + err.response.data.error);
        setTimeout(() => {}, 2000);
      });
  };
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button className="px-2" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-black">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            {/* <Link to={"/"}> */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                window.location.reload();
              }}
            >
              ✕
            </Link>
            {/* </Link> */}
            <h3 className="font-bold text-lg mb-4">Login</h3>
            <div className="mt-4 space-y-2">
              <h1>Email</h1>
              <input
                {...register("email", { required: true })}
                type="email"
                className="md:w-80 bg-white border-2 p-1 rounded-md"
                placeholder="enter your e-mail"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
              <h1>Password</h1>
              <input
                {...register("password", { required: true })}
                type="password"
                className="md:w-80 bg-white border-2 p-1 rounded-md"
                placeholder="password"
              />
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
              <div className="flex justify-evenly">
                <button
                  type="submit"
                  className="p-2 bg-pink-600 w-24 rounded-md hover:bg-pink-800 text-white"
                >
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
