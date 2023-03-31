import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductSlider from "./productSlider";
const api = import.meta.env.VITE_REACT_APP_BACKEND;
import Rating from "@mui/material/Rating";

const ProductPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState("");
  useEffect(() => {
    const handleFetchSingleProduct = async () => {
      await axios
        .get(`${api}product/${id}`)
        .then((res) => {
          console.log(res.data.product);
          setProductData(res.data.product);
        })
        .catch((error) => {
          setError("Cannot find produxt");
        });
    };
    handleFetchSingleProduct();
  }, []);

  return (
    <div className="flex py-4 justify-center justify-items-center align-middle text-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden">
      {productData && (
        <div className="border-2 md:flex">
          <ProductSlider productData={productData} />
          <div>
            <h1 className="text-xl p-8 w-[500px] text-cyan-500 font-bold">
              {productData.name}
              <br />
              <Rating name="read-only" value={productData.ratings} readOnly />
              {productData.ratings && (
                <p className="text-sm">({productData.reviews.length})</p>
              )}
            </h1>
            <h1 className="text-md p-8 md:w-[500px] w-[350px] m-auto">
              <span className="font-bold">About this item</span>
              <br />
              {productData.description}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
