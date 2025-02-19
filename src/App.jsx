import { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Cart from "./Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);

  const [currpage, setcurrpage] = useState(0);

  const url = "https://dummyjson.com/products?limit=100";
  const ind = url.indexOf("?limit");
  const perpageprod = 12;
  const paginationLength = Math.ceil(
    url.slice(ind + 7, url.length) / perpageprod
  );
  const startidx = currpage * perpageprod + 1;
  const endidx = startidx + perpageprod;

  const getProducts = async () => {
    const response = await fetch(url); 
    const data = await response.json();
    const { products } = data;
    // console.log(products);
    setProducts(products);
  };


  useEffect(()=>{
    getProducts()
  },[])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DashBoard
                products={products.slice(startidx, endidx)}
                pagelength={paginationLength}
                setcurrpage={setcurrpage}
                currpage={currpage}
                setcart={setcart}
              />
            }
          />
          <Route path="/cart" element={<Cart cart={cart} setcart={setcart}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
