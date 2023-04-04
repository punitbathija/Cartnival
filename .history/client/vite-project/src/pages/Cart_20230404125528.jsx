import React, { useState, useEffect } from "react";

const Cart = () => {
  return (
    <div className="flex">
      <div>
        <h1>Please review your cart before checkout</h1>
        <ul>
          Items
          <li>Toothpaste</li>
          <li>Toothbrush</li>
          <li>Soap</li>
          <li>shampoo</li>
          <li>Tshirt</li>
        </ul>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;
