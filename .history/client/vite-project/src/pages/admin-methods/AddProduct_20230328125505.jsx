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

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]"></div>
  );
};

export default AddProduct;
