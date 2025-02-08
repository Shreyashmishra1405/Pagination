import { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [currpage,setcurrpage]=useState(0);

  const url = "https://dummyjson.com/products?limit=100";
  const ind=url.indexOf("?limit");
  const perpageprod =10;
  const paginationLength = Math.ceil(url.slice(ind+7,url.length)/perpageprod);
  const startidx =currpage*perpageprod+1;
  const endidx=startidx+perpageprod;

  const getProducts = async () => {
      const response = await fetch(url); // Replace with your API endpoint
      const data = await response.json();
      const {products}=data;
      console.log(products);
      setProducts(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <DashBoard products={products.slice(startidx,endidx)} pagelength={paginationLength} setcurrpage={setcurrpage} />
    </>
  );
}

export default App;
