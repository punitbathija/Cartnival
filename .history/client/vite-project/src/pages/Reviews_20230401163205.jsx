import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";

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
          setProductData(res.data.reviews);
        })
        .catch((error) => {
          setError("Cannot find produxt");
        });
    };
    handleFetchReviews();
  }, []);

  return (
    <>
      <div className=" border-2 flex-col md:px-32 px-4 py-12 m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden">
        <h1 className="text-2xl  text-cyan-500">Reviews</h1>
        {productData &&
          productData.map((review) => {
            return (
              <div key={review._id}>
                <h1>{review.name}</h1>
                <h1>{review.rating}</h1>
                <Rating name="read-only" value={review.rating} readOnly />
                <h1>{review.comment}</h1>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Reviews;
