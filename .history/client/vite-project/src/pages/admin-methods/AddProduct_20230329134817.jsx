import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${api}admin/product/add`,
        name,
        price,
        description,
        image,
        category,
        brand,
        quantity,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">Admin Sign In</h1>
        <form onSubmit={handleAddProduct} encType="multipart/form-data">
          <p className="md:text-xl">
            Product Name<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <small>Product name should not be more than 120 characters</small>

          <p className="md:text-xl ">
            Price<span className="text-red-500">*</span>
          </p>
          <input
            type="number"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <br />
          <small>Product price cannot be more than 99999</small>

          <p className="md:text-xl ">
            Description<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <p className="md:text-xl ">
            image<span className="text-red-500">*</span>
          </p>
          <input type="file" name="image" onChange={handleImage} />

          <p className="md:text-xl ">
            Category<span className="text-red-500">*</span>
          </p>
          <div className="flex flex-col m-auto">
            <select
              className="border-2 text-black text-xl"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="border-2" value="Electronics">
                Electronics
              </option>
              <option className="border-2" value="Home and Kitchen">
                Home and Kitchen
              </option>
              <option className="border-2" value="Clothing and Accessories">
                Clothing and Accessories
              </option>
              <option className="border-2" value="Beauty">
                Beauty
              </option>
              <option className="border-2" value="Toys and Games">
                Toys and Games
              </option>
            </select>
          </div>

          <p className="md:text-xl ">
            Brand<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
          />

          <p className="md:text-xl ">
            Quantity<span className="text-red-500">*</span>
          </p>
          <input
            type="number"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
          <button
            className="my-4 text-xl border-2 p-1.5 bg-cyan-700 w-[50%] m-auto"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
