import React, { useState, useEffect } from "react";

const Cart = () => {
  return (
    <div className="flex text-center justify-center justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden h-[100vh]">
      <div>
        <h1 className="text-xl">🛒Please review your cart before checkout</h1>
        <ul className="border-2 p-5">
          <h1 className="text-xl mb-12">Items</h1>
          <li className="flex flex-wrap justify-between">
            <p>Toothpaste</p>
            <img
              src="https://th.bing.com/th/id/R.edbe0d2d6b620f651adfd570c34c97e3?rik=nRb4OCE1tzQ88A&riu=http%3a%2f%2fmojosavings.com%2fwp-content%2fuploads%2f2013%2f07%2fcolgate.jpg&ehk=lwPDpMUclEFPFUaKBrGmEgFUbFxpcvXka9LKOqDBaWc%3d&risl=&pid=ImgRaw&r=0"
              alt="paste"
              className="w-12 h-12"
            />
            <p>Price:- 299</p>
          </li>
          <li className="flex flex-wrap justify-between">
            <p>Toothpaste</p>
            <img
              src="https://th.bing.com/th/id/R.edbe0d2d6b620f651adfd570c34c97e3?rik=nRb4OCE1tzQ88A&riu=http%3a%2f%2fmojosavings.com%2fwp-content%2fuploads%2f2013%2f07%2fcolgate.jpg&ehk=lwPDpMUclEFPFUaKBrGmEgFUbFxpcvXka9LKOqDBaWc%3d&risl=&pid=ImgRaw&r=0"
              alt="paste"
              className="w-12 h-12"
            />
            <p>Price:- 299</p>
          </li>
          <li className="flex flex-wrap justify-between">
            <p>Toothpaste</p>
            <img
              src="https://th.bing.com/th/id/R.edbe0d2d6b620f651adfd570c34c97e3?rik=nRb4OCE1tzQ88A&riu=http%3a%2f%2fmojosavings.com%2fwp-content%2fuploads%2f2013%2f07%2fcolgate.jpg&ehk=lwPDpMUclEFPFUaKBrGmEgFUbFxpcvXka9LKOqDBaWc%3d&risl=&pid=ImgRaw&r=0"
              alt="paste"
              className="w-12 h-12"
            />
            <p>Price:- 299</p>
          </li>
          <li className="flex flex-wrap justify-between">
            <p>Toothpaste</p>
            <img
              src="https://th.bing.com/th/id/R.edbe0d2d6b620f651adfd570c34c97e3?rik=nRb4OCE1tzQ88A&riu=http%3a%2f%2fmojosavings.com%2fwp-content%2fuploads%2f2013%2f07%2fcolgate.jpg&ehk=lwPDpMUclEFPFUaKBrGmEgFUbFxpcvXka9LKOqDBaWc%3d&risl=&pid=ImgRaw&r=0"
              alt="paste"
              className="w-12 h-12"
            />
            <p>Price:- 299</p>
          </li>
          <li className="flex flex-wrap justify-between">
            <p>Toothpaste</p>
            <img
              src="https://th.bing.com/th/id/R.edbe0d2d6b620f651adfd570c34c97e3?rik=nRb4OCE1tzQ88A&riu=http%3a%2f%2fmojosavings.com%2fwp-content%2fuploads%2f2013%2f07%2fcolgate.jpg&ehk=lwPDpMUclEFPFUaKBrGmEgFUbFxpcvXka9LKOqDBaWc%3d&risl=&pid=ImgRaw&r=0"
              alt="paste"
              className="w-12 h-12"
            />
            <p>Price:- 299</p>
          </li>
        </ul>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;
