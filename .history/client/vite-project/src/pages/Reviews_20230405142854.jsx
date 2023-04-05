import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";

const api = import.meta.env.VITE_REACT_APP_BACKEND;

const Reviews = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState("");
  const [error, setError] = useState("");
  const user = useSelector(selectUser);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleAddReview = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}review/${id}`, {
        comment,
        rating,
      })
      .then((res) => {
        console.log(res.data.reviews);
        setComment("");
        setRating();
      })
      .catch((error) => {
        setError("Please signin and try again");
        setComment("");
        setRating();
      });
  };

  const handleDeleteReview = async (e) => {
    e.preventDefault();
    await axios
      .delete(`${api}review/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        setError("Please signin and try again");
      });
  };

  useEffect(() => {
    const handleFetchReviews = async () => {
      await axios
        .get(`${api}review/${id}`)
        .then((res) => {
          console.log(res.data.reviews);
          setProductData(res.data.reviews);
        })
        .catch((error) => {
          setError("Please refresh the tab and try again");
        });
    };
    handleFetchReviews();
  }, [comment, rating]);

  return (
    <>
      <div className="h-[90vh] flex-col text-center md:px-32 px-4 py-12 m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden">
        <h1 className="text-2xl text-cyan-500 my-4">Add or modify a review</h1>
        <div>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(e) => {
              setRating(parseInt(e.target.value));
            }}
          />
          <br />

          <input
            className=" w-full p-4 rounded-full border-2 my-4 bg-transparent"
            type="text"
            placeholder="Add a review"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />

          <br />
          <div className="flex justify-center ">
            <button
              onClick={handleAddReview}
              className="m-auto text-black bg-amber-400 shadow-lg p-2 rounded-md hover:scale-110 hover:drop-shadow-xl text-center m-auto"
            >
              Submit
            </button>
            {user && (
              <button onClick={handleDeleteReview}>
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            )}
          </div>
          <p className="py-2 text-red-600">{error}</p>
        </div>
        <h1 className="text-2xl  text-cyan-500 my-8">All reviews</h1>
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
      </div>
    </>
  );
};

export default Reviews;
