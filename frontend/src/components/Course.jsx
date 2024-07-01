import React, { useEffect, useState } from "react";
// import list from './../../public/list.json'
import Card from "./Card";
import {Link} from 'react-router-dom'
import axios from "axios"

export default function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getbook= async ()=>{
 try {
  const res = await axios.get('http://localhost:3000/book');
  console.log(res);
  setBook(res.data);
} catch (error) {
  console.log(error)
}
};
getbook();
  },[])
  // const books = list.filter((data) => {
  //   return data;})
  //   console.log(books)
  return (
    <>
      <div className="max-w-screen-2xl dark:bg-slate-800 drak:text-white bg-white container mx-auto md:px-20 px-4 min-h-screen ">
        <div className="pt-48 space-y-11 text-center">
          <h1 className="text-4xl text-black dark:text-white">
            We're delighted to have you{" "}
            <span className="text-pink-600">Here! :)</span>
          </h1>
          <p className=" text-black dark:text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            accusamus, pariatur non mollitia aspernatur odio odit autem quisquam
            voluptas voluptatibus quia, aliquid perferendis molestiae.
            Perspiciatis nisi deleniti quasi pariatur numquam? Quisquam ipsam
            dolor rem atque cupiditate, repellendus similique eaque officiis
            modi nisi et nobis, saepe, voluptates dolorem obcaecati aliquam
            iure. Repellendus neque architecto, dolor id perferendis adipisci a
            tempora nemo!
            <br />
           <Link to={'/'}>
           <button className="mt-10 duration-300 p-3 rounded-md bg-pink-700 hover:bg-pink-400 hover:text-white">
              Back
            </button></Link>
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3">
          {book.map((data)=>{
            return <Card data={data} key={data.id}/>
          })}
        </div>
      </div>
    </>
  );
}
