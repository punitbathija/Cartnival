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
          setTokenData(res.data.orders);
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
                <h1>Order Id:- {order._id}</h1>
                <h1>
                  Order Item:-
                  {order.orderItems[0].name.length > 40
                    ? order.orderItems[0].name.substring(0, 39) + "..."
                    : order.orderItems[0].name}{" "}
                </h1>
                <img src={order.orderItems[0].photo} className="w-52 m-auto" />

                <h1>To Deliver: {order.shippingInfo.city}</h1>
                <h1>
                  Total:{" "}
                  <span className="text-cyan-500 text-xl">
                    ₹{order.totalAmount}
                  </span>
                </h1>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FetchAllOrders;
