import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductSlider from "./productSlider";
const api = import.meta.env.VITE_REACT_APP_BACKEND;

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
  }, [productData]);

  return (
    <div className="flex py-4 flex-wrap justify-center justify-items-center align-middle text-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      {/* <ProductSlider productData={productData} /> */}
    </div>
  );
};

export default ProductPage;
