import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="flex text-center justify-center justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden h-[100vh]">
      <div className="w-4/5">
        <h1 className="text-xl my-4">
          🛒Please review your cart before checkout
        </h1>
        <ul className="border-2 p-5">
          <h1 className="text-xl mb-12 underline">Items</h1>
          <li className="flex flex-wrap justify-between">
            <p>Toothpaste</p>
            <img
              src="https://th.bing.com/th/id/R.edbe0d2d6b620f651adfd570c34c97e3?rik=nRb4OCE1tzQ88A&riu=http%3a%2f%2fmojosavings.com%2fwp-content%2fuploads%2f2013%2f07%2fcolgate.jpg&ehk=lwPDpMUclEFPFUaKBrGmEgFUbFxpcvXka9LKOqDBaWc%3d&risl=&pid=ImgRaw&r=0"
              alt="paste"
              className="w-12 h-12 pt-2"
            />
            <p>Price:- 299</p>
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
          <li className="flex flex-wrap justify-between">
            <p>Toothpaste</p>
            <img
              src="https://th.bing.com/th/id/R.edbe0d2d6b620f651adfd570c34c97e3?rik=nRb4OCE1tzQ88A&riu=http%3a%2f%2fmojosavings.com%2fwp-content%2fuploads%2f2013%2f07%2fcolgate.jpg&ehk=lwPDpMUclEFPFUaKBrGmEgFUbFxpcvXka9LKOqDBaWc%3d&risl=&pid=ImgRaw&r=0"
              alt="paste"
              className="w-12 h-12 pt-2"
            />
            <p>Price:- 299</p>
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
          <li className="flex flex-wrap justify-between">
            <p>Toothpaste</p>
            <img
              src="https://th.bing.com/th/id/R.edbe0d2d6b620f651adfd570c34c97e3?rik=nRb4OCE1tzQ88A&riu=http%3a%2f%2fmojosavings.com%2fwp-content%2fuploads%2f2013%2f07%2fcolgate.jpg&ehk=lwPDpMUclEFPFUaKBrGmEgFUbFxpcvXka9LKOqDBaWc%3d&risl=&pid=ImgRaw&r=0"
              alt="paste"
              className="w-12 h-12 pt-2"
            />
            <p>Price:- 299</p>
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
          <li className="flex flex-wrap justify-between">
            <p>Toothpaste</p>
            <img
              src="https://th.bing.com/th/id/R.edbe0d2d6b620f651adfd570c34c97e3?rik=nRb4OCE1tzQ88A&riu=http%3a%2f%2fmojosavings.com%2fwp-content%2fuploads%2f2013%2f07%2fcolgate.jpg&ehk=lwPDpMUclEFPFUaKBrGmEgFUbFxpcvXka9LKOqDBaWc%3d&risl=&pid=ImgRaw&r=0"
              alt="paste"
              className="w-12 h-12 pt-2"
            />
            <p>Price:- 299</p>
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
          <li className="flex flex-wrap justify-between">
            <p>Toothpaste</p>
            <img
              src="https://th.bing.com/th/id/R.edbe0d2d6b620f651adfd570c34c97e3?rik=nRb4OCE1tzQ88A&riu=http%3a%2f%2fmojosavings.com%2fwp-content%2fuploads%2f2013%2f07%2fcolgate.jpg&ehk=lwPDpMUclEFPFUaKBrGmEgFUbFxpcvXka9LKOqDBaWc%3d&risl=&pid=ImgRaw&r=0"
              alt="paste"
              className="w-12 h-12 pt-2"
            />
            <p>Price:- 299</p>
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
        </ul>

        <button className="flex gap-2 bg-cyan-700 shadow-lg p-2 rounded-md hover:scale-110 hover:drop-shadow-xl text-center m-auto my-4">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
