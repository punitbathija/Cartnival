import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAllOrders = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  let allOrders = tokenData;
  useEffect(() => {
    async function handleFetchAllUsers() {
      const result = await axios
        .get(`${api}allorders`)
        .then((res) => {
          console.log(res.data);
          //   setTokenData(res.data.allOrders);
        })
        .catch((error) => setError("This link is strictly resticted to Admin"));
    }
    handleFetchAllUsers();
  }, []);

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="my-2">
        <h1 className="text-3xl py-6 text-cyan-500">All orders</h1>
        {error && <p>{error}</p>}

        {tokenData &&
          allOrders.map((order) => {
            return (
              <div className="py-4" key={order._id}>
                <p>Name:- {order.name}</p>
                <p>Email:- {order.email}</p>
                <p>Role:- {order.role}</p>
                <p>Date:- {order.createdAt}</p>
                <p>Id:- {order._id}</p>

                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FetchAllOrders;
