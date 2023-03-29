import React, { useState } from "react";
import axios from "axios";

const FetchSingleProduct = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleFetchSingleProduct = async (e) => {
    const product = searchQuery;
    e.preventDefault();
    await axios
      .get(`${api}product/${product}`)
      .then((res) => {
        console.log(res.data.product);
        setTokenData(res.data.product);
      })
      .catch((error) => {
        setError("Cannot find produxt");
      });
  };

  const handleModifyProduct = async (e) => {
    const customer = searchQuery;
    e.preventDefault();
    await axios.post(`${api}admin/product/${product}`, {}).then((res) => {
      console.log(res);
    });
  };

  //   const handleDeleteSingleUser = async (e) => {
  //     const customer = searchQuery;
  //     e.preventDefault();
  //     await axios
  //       .delete(`${api}admin/user/${customer}`)
  //       .then((res) => {
  //         setTokenData(res.data.customer);
  //       })
  //       .catch((error) => {
  //         setError("Cannot find user");
  //       });
  //   };

  return (
    <div className="md:flex m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="">
        <h1 className="text-3xl text-cyan-500">Product Details</h1>
        <form onSubmit={handleFetchSingleProduct} method="post">
          <input
            type="text"
            className="py-2 w-full text-center border-2 dark:text-black "
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <br />
          <button
            className="my-2 text-xl border-2 p-1.5 bg-cyan-700"
            onClick={handleFetchSingleProduct}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          {tokenData && (
            <div className="flex flex-col justify-center justify-items-center align-middle m-auto text-center gap-4">
              <p className="md:text-xl">Name:- {tokenData.name}</p>
              <p className="md:text-xl">Brand:- {tokenData.brand}</p>
              <p className="md:text-xl">Category:- {tokenData.category}</p>
              <p className="md:text-xl">Created By:- {tokenData.customer}</p>
              <p className="md:text-xl">
                Description:- {tokenData.description}
              </p>
              <p className="md:text-xl">Price:- {tokenData.price}</p>
              <p className="md:text-xl">Category:- {tokenData.quantity}</p>
              <img
                className="h-[250px] w-[250px] text-center m-auto"
                src={tokenData.photos[0].secure_url}
              />
              <br />
            </div>
          )}
          {error && <p>{error} </p>}
        </form>
      </div>
    </div>
  );
};

export default FetchSingleProduct;
