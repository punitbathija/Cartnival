import React, { useState, useEffect } from "react";
import axios from "axios";

const AllProducts = () => {
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
  return (
    <div className="flex flex-wrap justify-center justify-items-center align-middle text-center m-auto">
      {productData &&
        allProducts.map((product) => {
          return (
            <div className="my-4 h-96 w-96 border-2 flex m-auto">
              <img
                src={product.photos[0].secure_url}
                className="h-2/3 m-auto w-2/3"
              />
            </div>
          );
        })}
    </div>
  );
};

export default AllProducts;
