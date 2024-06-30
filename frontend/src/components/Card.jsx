import React from "react";

export default function Card({data}) {
    console.log(data)
  return (
    <>
      <div className="card md:w-96 dark:bg-slate-900 dark:text-white bg-white shadow-xl mt-6 hover:scale-105 duration-300">
        <figure>
          <img
            src={data.image}     
                   alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {data.name}
            <div className="badge badge-secondary">{data.category}</div>
          </h2>
          <p>{data.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{data.price}</div>
            <div className="badge badge-outline rounded-full border-[2px] px-2 py-3 hover:bg-pink-600 hover:text-white duration-200">Products</div>
          </div>
        </div>
      </div>
    </>
  );
}
