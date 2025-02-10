import React, { useRef, useState } from "react";
const DashBoard = ({ products, pagelength, setcurrpage }) => {
  const [active, setactive] = useState(false);

  const handleClick = (n) => {
    setcurrpage(n);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return;
  };

  const handleAddtoCart = (prod) => {
      window.alert("added to cart");
  };

  return (
    <>
      <div className="w-full flex justify-center font-semibold text-2xl p-6 cursor-pointer bg-whiteitems-center">
        View All Products
      </div>
      <div className="w-full flex flex-col py-8 bg-[#EDF4F2] justify-center">
        <div className="grid  grid-cols-3 gap-6 p-8">
          {products.map((prod, ind) => {
            // console.log(prod.id);
            return (
              <div
                key={prod.id}
                className="product flex flex-col  bg-[#31473A] text-white p-4  justify-center items-center rounded-xl cursor-pointer"
              >
                <img
                  src={prod.images[0]}
                  alt="img.jpg"
                  className="h-[200px] aspect-auto"
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

        <div className="flex justify-center items-center w-full gap-4 ">
          {[...Array(pagelength).keys()].map((n, ind) => {
            return (
              <>
                <span
                  key={ind}
                  onClick={() => handleClick(n)}
                  className="border cursor-pointer active:bg-[#31473A] min-w-[30px] items-center flex justify-center  active:text-white  rounded-sm border-black p-2 "
                >
                  {n + 1}
                </span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
