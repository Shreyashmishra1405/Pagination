import React from "react";
const DashBoard = ({ products, pagelength, setcurrpage }) => {
  // console.log(pagelength);

  const handleClick = (n) => {
    setcurrpage(n);
    return;
  };

  return (
    <>
      <div className="w-screen flex justify-center font-semibold text-2xl p-8 cursor-pointer bg-gray-100 items-center">
        {/* {"Total Products :" + `${products.length}`} */}
        View All Products
      </div>
      <div className="max-w-screen p-8 flex flex-col  justify-center items-center">
        <div className="flex justify-center items-center w-full gap-4 ">
          {[...Array(pagelength).keys()].map((n, ind) => {
            return (
              <>
                <span
                  key={n+1}
                  onClick={() => handleClick(n)}
                  className="border cursor-pointer active:bg-indigo-900 min-w-[30px] items-center flex justify-center  active:text-white  rounded-sm border-black p-2 "
                >
                  {n + 1}
                </span>
              </>
            );
          })}
        </div>
        <div className="grid w-screen  grid-cols-3 gap-8 p-8">
          {products.map((prod) => {
            // console.log(prod.id);
            return (
              <div
                key={prod.id}
                className="product flex flex-col  bg-slate-900 text-white p-4  justify-center items-center rounded-xl cursor-pointer"
              >
                <img
                  src={prod.images[0]}
                  alt="img.jpg"
                  className="h-[200px] aspect-auto"
                />
                <div className="flex flex-col gap-4 font-semibold items-center">
                  <span>{prod.title}</span>
                  <span className="text-gray-100 border active:bg-white active:text-black border-white p-2 rounded-md min-w-[50px]">
                    ${prod.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
