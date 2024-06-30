import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import List from "./../../public/list.json";
import Slider from "react-slick";
import Card from "./Card";

export default function Freebooks() {
  const books = List.filter((data) => {
    return data.category === "Free";
  });
//   console.log(books);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto bg-white dark:bg-slate-800 dark:text-white md:px-20 px-4 pt-10">
        <div className=" text-black dark:text-white">

        <h1 className="text-xl font-semibold  pb-2">
          Free offered Course
        </h1>
        <p className="">
          Lorem Lorem, ipsum dolor.ipsum dolor sit amet consectetur adipisicing
          elit. Hic ad praesentium facere aliquid cupiditate molestias earum
          impedit dicta? Blanditiis, cumque.
        </p>
        </div>
      <div className="mt-10">
      <Slider {...settings}>
        {books.map((items)=>{
           return <Card data={items} key={items.id}/>
        })}
      </Slider>
      </div>
      </div>
    </>
  );
}
