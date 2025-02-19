import React, { useRef, useState } from "react";
import { Link } from "react-router";
const DashBoard = ({
  products,
  cart,
  setcart,
  pagelength,
  setcurrpage,
  currpage,
}) => {
  const handleClick = (n) => {
    setcurrpage(n);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return;
  };

  const handleAddtoCart = (prod) => {
    setcart((prev) => {
      return [...prev, prod];
    });
    alert("added");
  };

  return (
    <>
      <div className="relative sm:text-xs md:text-2xl lg:text-3xl sm:flex sm:justify-between md:flex md:justify-center font-semibold  p-6 cursor-pointer bg-whiteitems-center">
        <span>View All Products</span>
        <Link to={"/cart"}>
          <div
            className="absolute sm:right-10 sm:top-5 sm:text-sm sm-px-2
           md:top-7 md:px-4  md:right-20 border-2
          border-black rounded bg-black text-white active:bg-[#31473A]  active:text-white "
          >
            <span
              className="
            sm:flex sm:justify-center sm:items-center sm:gap-2 sm:px-2
            md:text-2xl
            md:flex md:justify-center md:items-center md:gap-2 md:px-2 "
            >
              Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={"1em"}
                fill="white"
                viewBox="0 0 576 512"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            </span>
          </div>
        </Link>
      </div>
      <div
        className="
      min-h-screen flex flex-col p-4 bg-[#EDF4F2] justify-start"
      >
        <div
          className="sm-grid sm:grid-cols-2  sm:gap-2 
        md:grid  md:grid-cols-4 md:gap-6 md:p-8"
        >
          {products.map((prod, ind) => {
            return (
              <div
                key={prod.id}
                className="product flex flex-col  bg-[#31473A] text-white p-4  justify-center items-center rounded-xl cursor-pointer"
              >
                <img
                  src={prod.images[0]}
                  alt="img.jpg"
                  loading="lazy"
                  className="md:h-[200px] aspect-auto sm:max-h-[100px]"
                />
                <div className="flex flex-col gap-4 font-semibold items-center">
                  <span>{prod.title}</span>
                  <span
                    onClick={() => handleAddtoCart(prod)}
                    className="text-gray-100 border active:bg-white
                   active:text-black border-white p-2 flex justify-center rounded-md min-w-[100px]"
                  >
                    ${prod.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center w-full gap-4">
          {currpage < 10 &&
            [...Array(pagelength).keys()].map((n, ind) => {
              return (
                <>
                  {
                    <span
                      key={n}
                      onClick={() => handleClick(n)}
                      className="border cursor-pointer active:bg-[#31473A] min-w-[30px] items-center flex justify-center  active:text-white  rounded-sm border-black p-2 "
                    >
                      {n + 1}
                    </span>
                  }
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
