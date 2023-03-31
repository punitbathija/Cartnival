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

  return <div>Hello from ProductPage</div>;
};

export default ProductPage;
