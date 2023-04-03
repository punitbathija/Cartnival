import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const ToysAndGames = () => {
  const [productData, setProductData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  let allProducts = productData;

  useEffect(() => {
    async function handleFetchAllProducts() {
      const result = await axios
        .get(`${api}products`)
        .then((res) => {
          const filteredData = res.data.products.filter(
            (item) => item.category === "Toys and Games"
          );
          console.log(filteredData);

          setProductData(filteredData);
        })
        .catch((error) => setError("something went wrong please refresh"));
    }
    handleFetchAllProducts();
  }, []);

  return (
    <>
      <h1 className=" text-cyan-500 text-3xl md:text-4xl font-extralight p-24  dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden">
        Toys and Games
      </h1>
      <div className="flex py-6 flex-wrap justify-center justify-items-center align-middle text-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden">
        {productData &&
          allProducts.map((product) => {
            let id = product._id;
            return (
              <Link to={`/products/${id}`} key={product._id}>
                <div className="my-4 h-96 w-96 m-auto cursor-pointer">
                  <img
                    src={product.photos[0].secure_url}
                    className="p-4 h-2/3 m-auto w-2/3 rounded-full"
                  />
                  <p className="my-2 w-[50%] text-center m-auto text-cyan-500">
                    {product.name.length > 35
                      ? product.name.substring(0, 34) + "..."
                      : product.name}
                  </p>
                  <div className="my-2 w-[50%] text-center m-auto">
                    <Stack spacing={1}>
                      <Rating
                        className="text-center m-auto dark:text-white bg-transparent"
                        name="size-small read-only"
                        defaultValue={product.ratings}
                        size="small"
                      />
                    </Stack>
                  </div>
                  <p className="my-2 w-[50%] text-center m-auto font-bold">
                    ₹{product.price}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default ToysAndGames;
