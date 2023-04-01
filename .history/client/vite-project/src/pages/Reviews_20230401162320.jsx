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
          console.log(res.data.reviews);
          setProductData(res.data.product);
        })
        .catch((error) => {
          setError("Cannot find produxt");
        });
    };
    handleFetchReviews();
  }, []);

  return (
    <>
      <div className=" border-2 flex md:px-32 px-4 py-12 m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden">
        <h1 className="text-2xl underline">Reviews</h1>
      </div>
    </>
  );
};

export default Reviews;
