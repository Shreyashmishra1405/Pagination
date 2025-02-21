import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const Cart = ({ cart, setcart }) => {
  const [bill, setBill] = useState({
    Subtotal: 0,
    salestax: 0,
    GrandTotal: 0,
  });

  const calculateSubtotal = () => {
    const subtotal = cart.reduce((tot, prod) => tot + Number(prod.price), 0);
    return subtotal;
  };

  const calculatesalestax = (subtotal) => {
    return Number((0.18 * subtotal).toFixed(2));
  };

  const calculateGrandTotal = (subtotal, salestax) => {
    return subtotal + salestax;
  };

  useEffect(() => {
    const subtotal = calculateSubtotal();
    const salestax = calculatesalestax(subtotal);
    const grandTotal = calculateGrandTotal(subtotal, salestax);

    setBill({
      Subtotal: subtotal,
      salestax: salestax,
      GrandTotal: grandTotal,
    });
  }, [cart]);

  const handleDelete = (id) => {
    // setTimeout(()=>{
    //   return <div className="absolute top-50 left-50 bg-black w-[50px] h-[50px] text-white">removing in 2secs</div>
    // },2000)
    const updatedCart = cart.filter((item) => item.id !== id);
    setcart(updatedCart);
  };

  return (
    <>
      <div className="w-full flex justify-center font-semibold text-2xl p-6 cursor-pointer bg-whiteitems-center">
        <span>Cart</span>
        <Link to={"/"}>
          <div className="absolute sm:right-10 sm:top-5 sm:text-sm sm-px-2
           md:top-7 md:px-4  md:right-20 border-2 border-black rounded bg-black text-white active:bg-[#31473A]  active:text-white px-2 text-lg ">
            <span className="flex justify-center items-center gap-2 ">
              Go back to Products
            </span>
          </div>
        </Link>
      </div>
      {cart.length ? (
        <div className="flex flex-row gap-2 justify-between w-full min-h-screen bg-[#EDF4F2]">
          {/* cart */}
          <div className="cart w-2/3 flex flex-col p-8 gap-8  justify-start items-center">
            {cart.map((prod) => {
              return (
                <div className=" relative w-full border-2  border-black  flex gap-8  cursor-pointer justify-around  items-center px-16 hover:bg-[#31473A] hover:text-white rounded-lg">
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
                      <div className="flex flex-row gap-4 text-xs">
                        <div className="flex flex-row items-center gap-1">
                          <svg
                            height={"1rem"}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="green"
                          >
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <span className="font-semibold">
                            {prod.warrantyInformation}
                          </span>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                          <svg
                            height={"1rem"}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="green"
                          >
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <span className="font-semibold">
                            {prod.returnPolicy}
                          </span>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                          <svg
                            height={"1rem"}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="green"
                          >
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <span className="font-semibold">
                            {prod.shippingInformation}
                          </span>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                          <svg
                            height={"1rem"}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="green"
                          >
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                          </svg>
                          <span className="font-semibold">
                            {prod.availabilityStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <h1 className="font-extrabold">${prod.price}</h1>
                  </div>
                  <span className="absolute bottom-4 right-4 active:fill-white">
                    <svg
                      id={prod.id}
                      xmlns="http://www.w3.org/2000/svg"
                      height={"1rem"}
                      onClick={(e) => {
                        handleDelete(prod.id);
                      }}
                      viewBox="0 0 448 512"
                    >
                      s
                      <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </span>
                </div>
              );
            })}
          </div>
          {/* bill */}
          {cart.length !== 0 ? (
            <div className=" bills w-1/3 flex flex-col  p-8 gap-8  justify-start items-center">
              <div className="flex flex-col gap-4 bg-[#31473A] text-white w-full rounded-2xl p-10 ">
                <span className="font-bold">Billing details</span>
                <span className="border w-full border-gray-300"></span>
                <div className=" flex flex-col gap-4 items-start ">
                  <div className="flex flex-row justify-between w-full">
                    <span>Subtotal:</span>
                    <span>${bill.Subtotal.toFixed(2)}</span>
                  </div>
                  <span className="border w-full border-gray-300"></span>
                  <div className="flex flex-row justify-between w-full">
                    <span>Sales Tax:</span>
                    <span>${bill.salestax}</span>
                  </div>
                  <span className="border w-full border-gray-300"></span>
                  <div className="flex flex-row justify-between w-full items-center">
                    <span>Coupon Code:</span>
                    <input type="text" className="text-black p-2 uppercase" />
                  </div>
                  <span className="border w-full border-gray-300"></span>
                  <div className="flex flex-row justify-between w-full items-center">
                    <span>Grand Total:</span>${bill.GrandTotal}
                  </div>
                  <span className="border w-full border-gray-300"></span>
                  <button
                    className="text-gray-100 border active:bg-white
                   active:text-black border-white p-2 flex justify-center font-semibold rounded-md min-w-[100px]"
                    onClick={() => alert("Success!")}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          No items to display :(
        </div>
      )}
    </>
  );
};

export default Cart;
