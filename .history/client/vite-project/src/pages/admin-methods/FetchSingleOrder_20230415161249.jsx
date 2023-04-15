import React, { useState } from "react";
import axios from "axios";

const FetchSingleOrder = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleFetchSingleOrder = async (e) => {
    const order = searchQuery;
    e.preventDefault();
    await axios
      .get(`${api}/order/${order}`)
      .then((res) => {
        console.log(res.data.order);
        setTokenData(res.data.order);
      })
      .catch((error) => {
        setError("Cannot find any order's");
      });
  };

  return (
    <div className="md:flex m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="">
        <h1 className="text-3xl text-cyan-500">Order Details</h1>
        <form onSubmit={handleFetchSingleOrder} method="post">
          <input
            type="text"
            className="py-2 w-full text-center border-2 dark:text-black "
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <br />
          <button
            className="my-2 text-xl border-2 p-1.5 bg-cyan-700"
            onClick={handleFetchSingleOrder}
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
        </form>
        {error && <p>{error}</p>}

        {tokenData && (
          <div className="p-6 border-2 py-4 flex-col text-center justify-center justify-items-center align-middle m-auto">
            <h1>Order Id:- {tokenData._id}</h1>
            <h1>Customer Name:- {tokenData.customer.name}</h1>
            <h1>Customer Email:- {tokenData.customer.email}</h1>
            <h1>Customer Order Items:- {tokenData.orderItems[0].name}</h1>
            <h1>
              Customer Shipping Address:-{tokenData.shippingInfo.address}{" "}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchSingleOrder;
