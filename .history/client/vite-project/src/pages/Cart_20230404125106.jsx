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
  );
}

export default Cart;
