import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductComponent = () => {
  const [productData, setProductData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  let allProducts = productData;
  useEffect(() => {
    async function handleFetchAllProducts() {
      const result = await axios
        .get(`${api}products`)
        .then((res) => {
          console.log(res.data.products);
          setProductData(res.data.products);
        })
        .catch((error) => setError("something went wrong please refresh"));
    }
    handleFetchAllProducts();
  }, []);

  return(

  <div className="my-4 h-96 w-96 border-2 flex m-auto  dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono"></div>;
  )
};

export default ProductComponent;
