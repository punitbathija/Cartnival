import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const api = import.meta.env.VITE_REACT_APP_BACKEND;

const ProductPage = () => {
  const { id } = useParams();
  useEffect(() => {
    const handleFetchSingleProduct = async () => {
      await axios
        .get(`${api}product/${id}`)
        .then((res) => {
          console.log(res.data.product);
        })
        .catch((error) => {
          setError("Cannot find produxt");
        });
    };
    handleFetchSingleProduct();
  }, []);

  return (
    <div className="flex my-6 flex-wrap justify-center justify-items-center align-middle text-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <h1>Hello world!</h1>
    </div>
  );
};

export default ProductPage;
