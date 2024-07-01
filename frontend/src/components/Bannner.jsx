import React from "react";

export default function Bannner() {
  return (
    <>
      <div className="max-w-screen-2xl container bg-white dark:bg-slate-800 dark:text-white mt-16 mx-auto md:px-20 px-4 flex md:flex-row flex-col">
        <div className="w-full order-2 md:order-1 md:w-1/2 space-y-7 mt-12 md:mt-36">
          <h1 className="text-4xl font-bold dark:text-white text-black">
            Hello, Welcome here to learn something{" "}
            <span className="text-pink-600">new everyday !!!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            natus perferendis facere eum accusantium, accusamus quas delectus
            possimus necessitatibus nihil, ullam consectetur assumenda illo
            porro quam nobis ipsam id mollitia velit tempore
          </p>
          <div className="">
          <label className=" border rounded-md py-3 px-3 dark:text-white text-black bg-white flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow outline-none bg-white" placeholder="Enter email to login" />
          </label>
          <button className="px-2 py-3  mt-4 rounded-md text-white bg-pink-600">Secondary</button>
          </div>
        </div>
        <div className="w-full  md:w-1/2 order-1 md:order-2 mt-10 md:mt-0"><img  className="w-92 h-92"src="/banner.jpg" alt="" /></div>
      </div>
    </>
  );
}
