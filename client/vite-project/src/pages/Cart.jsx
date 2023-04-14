import React, { useEffect, useState } from "react";
import axios from "axios";
const api = import.meta.env.VITE_REACT_APP_BACKEND;
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectItems, selectTotal, removeFromCart } from "../cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { selectUser } from "../userSlice";

const stripePromise = loadStripe(
  import.meta.env.VITE_REACT_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
  const cartItems = useSelector(selectItems);
  console.log(cartItems);
  const items = cartItems;
  const total = useSelector(selectTotal);
  console.log(total);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const createCheckoutSession = async (e) => {
    e.preventDefault();
    const stripe = await stripePromise;

    const checkoutSesion = await axios.post(`${api}create-checkout-session`, {
      items,
      id: user.id,
      email: user.email,
    });
    0;

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSesion.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

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
              <li className="flex flex-wrap justify-between" key={item.id}>
                <p>
                  {item.name.length > 35
                    ? item.name.substring(0, 34) + "..."
                    : item.name}
                </p>
                <img
                  src={item.photo}
                  alt="product"
                  className="w-12 h-12 mb-8"
                />
                <p>₹{item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)}>
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
        <p className="text-2xl p-4 border-2 bg-cyan-100 text-black">
          Total:- ₹{total}
        </p>
        <button
          className="flex gap-2 bg-cyan-700 shadow-lg p-2 rounded-md hover:scale-110 hover:drop-shadow-xl text-center m-auto my-4"
          onClick={createCheckoutSession}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
