import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");

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
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">Admin Sign In</h1>
        <form onSubmit={handleAddProduct} method="post">
          <p className="md:text-2xl">
            Product Name:-<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <p className="md:text-2xl ">
            Price:-<span className="text-red-500">*</span>
          </p>
          <input
            type="number"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <p className="md:text-2xl ">
            Description:-<span className="text-red-500">*</span>
          </p>
          <input
            type="number"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
