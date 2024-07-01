import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "./Context/Auth";

export default function About() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  useEffect(() => {
    const get = () => {
      setName(authUser.name);
      setEmail(authUser.email);
    };
    get();
  }, []);
  console.log(name);
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl dark:bg-slate-800 drak:text-white bg-white container mx-auto md:px-20 px-4 min-h-[600px] flex justify-center items-center">
        <div className=" w-[500px] h-[200px] border rounded-md text-black text-center bg-slate-500">
            <div className="text-2xl">About</div>
          <div className=" mx-2 mt-12">
            {" "}
            <label htmlFor="">name</label>
            <input
              type="text"
              className="bg-white border-2 rounded mx-2 md:mx-6 "
              value={name}
            />
          </div>
          <div className="mx-2 mt-6">
            {" "}
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="bg-white border-2 rounded mx-2 md:mx-6"
              value={email}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
