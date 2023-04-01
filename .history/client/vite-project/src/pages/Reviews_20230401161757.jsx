import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const api = import.meta.env.VITE_REACT_APP_BACKEND;

const Reviews = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState("");
  useEffect(() => {
    const handleFetchReviews = async () => {
      await axios
        .get(`${api}review/${id}`)
        .then((res) => {
          console.log(res);
          //   setProductData(res.data.product);
        })
        .catch((error) => {
          setError("Cannot find produxt");
        });
    };
    handleFetchReviews();
  }, []);

  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  );
};

export default Reviews;
