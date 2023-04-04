import React, { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems([
      { id: 1, name: "Item 1", price: 10 },
      { id: 2, name: "Item 2", price: 20 },
      { id: 3, name: "Item 3", price: 30 },
    ]);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(
      updatedCartItems.findIndex((item) => item.id === id),
      1
    );
    setCartItems(updatedCartItems);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">Cart</h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Review your items and proceed to checkout.
        </p>
      </div>
      <ul className="divide-y divide-gray-200">
        {cartItems.map((item) => (
          <li key={item.id} className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-8 w-8 rounded-full" src="/item.jpg" alt="" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>
            <button
              className="ml-4 py-1 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="px-4 py-5 sm:px-6">
        <button
          className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
