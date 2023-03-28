import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}addProduct`, {})
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {});
  };

  return <div onClick={handleAddProduct}>handleAddProduct</div>;
};

export default AddProduct;
