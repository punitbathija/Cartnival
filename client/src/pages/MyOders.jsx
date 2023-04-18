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
    <div className="flex-col justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono min-h-[85.5vh] overflow-hidden">
      <h1 className="text-3xl text-cyan-500">My Orders</h1>

      <div className="md:flex flex-wrap justify-center justify-items-center align-middle m-auto my-2">
        {error && <p>{error}</p>}
        {orderData &&
          orderData.map((order) => {
            return (
              <div
                className="border-2 my-4 h-106 w-86 cursor-default text-center flex flex-col gap-2 mx-4"
                key={order._id}
              >
                <h1>
                  Order Id: <span className="text-cyan-500">{order._id}</span>
                </h1>
                <h1>
                  {order.orderItems[0].name.length > 40
                    ? order.orderItems[0].name.substring(0, 39) + "..."
                    : order.orderItems[0].name}
                </h1>
                <img src={order.orderItems[0].photo} className="w-52 m-auto" />
                <h1>Order Status: {order.orderStatus}</h1>
                <h1>Delivering To {order.shippingInfo.city}</h1>
                <h1>Shipping: ₹{order.shippingAmount}</h1>
                <h1>
                  Total:{" "}
                  <span className="text-cyan-500 text-xl">
                    ₹{order.totalAmount}
                  </span>
                </h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyOrders;
