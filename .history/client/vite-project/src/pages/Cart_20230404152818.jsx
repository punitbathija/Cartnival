import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectItems);
  console.log("cart items include");
  console.log(cartItems);

  return (
    <div className="flex text-center justify-center justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden h-[100vh]">
      <div className="w-4/5">
        <h1 className="text-xl my-4">
          🛒Please review your cart before checkout
        </h1>
        <ul className="border-2 p-5">
          <h1 className="text-xl mb-12 underline">Items</h1>
          {cartItems.map((item) => {
            return (
              <li className="flex flex-wrap justify-between" key={item._id}>
                <p>{item.name}</p>
                <img
                  src={item.photo}
                  alt="product"
                  className="w-16 h-16 mb-8"
                />
                <p>₹{item.price}</p>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mb-10 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>

        <button className="flex gap-2 bg-cyan-700 shadow-lg p-2 rounded-md hover:scale-110 hover:drop-shadow-xl text-center m-auto my-4">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
