import React, { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const [orderData, setOrderData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  useEffect(() => {
    async function handleOrders() {
      const result = await axios
        .get(`${api}myorders`)
        .then((res) => {
          setOrderData(res.data.order);
          console.log(res.data.order);
        })
        .catch((error) => setError("Cannot fetch any order's"));
    }
    handleOrders();
  }, []);

  return (
    <div className="md:flex justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="my-2">
        <h1 className="text-3xl text-cyan-500">My Orders</h1>
        {error && <p>{error}</p>}
        {orderData &&
          orderData.map((order) => {
            return (
              <div
                className="border-2 my-4 h-96 w-96 m-auto cursor-pointer justify-center justify-items-center"
                key={order._id}
              >
                <h1>{order.orderItems[0].name}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyOrders;
