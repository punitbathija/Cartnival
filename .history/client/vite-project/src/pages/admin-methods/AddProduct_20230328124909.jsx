import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [role, setRole] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleProductTest = async (e) => {
    e.preventDefault();
    await axios
      .get(`${api}producttest`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {});
  };

  return <div onClick={handleProductTest}>handleProductTest</div>;
};

export default AddProduct;
