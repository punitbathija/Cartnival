import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";

const api = import.meta.env.VITE_REACT_APP_BACKEND;

const Reviews = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState("");
  const [error, setError] = useState("");

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

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

  const handleAddReview = async () => {
    await axios
      .post(`${api}review/${id}`, {
        comment,
        rating,
      })
      .then((res) => {
        console.log(res.data.reviews);
      })
      .catch((error) => {
        setError("Cannot find produxt");
      });
  };

  return (
    <>
      <div className="h-[90vh] flex-col text-center md:px-32 px-4 py-12 m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden">
        <h1 className="text-2xl  text-cyan-500 my-8">Reviews</h1>
        {productData &&
          productData.map((review) => {
            return (
              <div key={review._id} className="p-4">
                <h1>{review.name}</h1>
                <Rating
                  name="read-only"
                  size="medium"
                  value={review.rating}
                  readOnly
                />
                <h1>{review.comment}</h1>
              </div>
            );
          })}
        <h1>Add a review</h1>
        <div className="dark:text-black">
          <input
            type="text"
            placeholder="Add a review"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
              console.log(rating);
            }}
          />
          <button onClick={handleAddReview}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
