import React from "react";
import { Link } from "react-router";
const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <>
      <div className="w-full flex justify-center font-semibold text-2xl p-6 cursor-pointer bg-whiteitems-center">
        Cart
        <Link to={"/products"}>
          <div className="absolute right-20 border-2 border-black rounded bg-black text-white active:bg-[#31473A]  active:text-white px-2 text-lg ">
            <span className="flex justify-center items-center gap-2 ">
              Go back to Products
            </span>
          </div>
        </Link>
      </div>
      <div className="w-full gap-8 flex flex-col p-8 bg-[#EDF4F2] justify-start items-center">
        {cart.map((prod) => {
          return (
            <div className="border-2 w-3/4 border-black  flex gap-8  cursor-pointer justify-around  items-center px-16 hover:bg-[#31473A] hover:text-white rounded-lg">
              <div className="left max-w-[200px] flex justify-center p-4">
                <img
                  src={prod.images[0]}
                  className="max-h-[200px] max-w-[200px] aspect-square"
                  alt=""
                />
              </div>
              <div className="mid p-2">
                <div className="flex gap-2 font-bold">
                  <h1 className="">{prod.title}</h1>
                </div>
                <div className="flex flex-col gap-2  text-sm ">
                  <span>{prod.description}</span>
                  <span className="font-semibold">
                    *{prod.warrantyInformation}
                  </span>
                  <span className="font-semibold">*{prod.returnPolicy}</span>
                  <span className="text-sm font-semibold">
                    *{prod.shippingInformation}
                  </span>
                </div>
              </div>
              <div className="right">
                <h1 className="font-extrabold">${prod.price}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
