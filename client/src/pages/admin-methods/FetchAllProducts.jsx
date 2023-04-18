import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAllProducts = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  let allProducts = tokenData;
  useEffect(() => {
    async function handleFetchAllProducts() {
      const result = await axios
        .get(`${api}products`)
        .then((res) => {
          console.log(res.data.products);
          setTokenData(res.data.products);
        })
        .catch((error) => setError("This link is strictly resticted to Admin"));
    }
    handleFetchAllProducts();
  }, []);

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="my-2">
        <h1 className="text-3xl py-6 text-cyan-500">All Products</h1>
        {error && <p>{error}</p>}

        {tokenData &&
          allProducts.map((product) => {
            return (
              <div className="py-4" key={product._id}>
                <p>Id:- {product._id}</p>
                <p>Name:- {product.name}</p>
                <p>Brand:- {product.brand}</p>
                <p>Created By:- {product.customer}</p>
                <p>Category:- {product.category}</p>
                <p>Price:- {product.price}</p>
                <p>Date:- {product.createdAt}</p>
                <p>Quantity:- {product.quantity}</p>
                <img
                  className="h-[250px] w-[250px] text-center m-auto"
                  src={product.photos[0].secure_url}
                ></img>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FetchAllProducts;
