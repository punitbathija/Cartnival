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
        <h1 className="text-xl text-cyan-500 my-4">Add a review</h1>
        <div className="dark:text-black">
          <input
            className="p-5 rounded-full border-2 my-4"
            type="text"
            placeholder="Add a review"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <br />
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(e) => {
              setRating(parseInt(e.target.value));
            }}
          />
          <br />
          <button className="flex gap-2 bg-cyan-500 shadow-lg p-3 rounded-md hover:scale-110 hover:drop-shadow-xl text-center">
            BUY NOW
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
