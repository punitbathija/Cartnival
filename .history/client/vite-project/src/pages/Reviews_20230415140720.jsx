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
          <button
            onClick={handleAddReview}
            className="text-black bg-amber-400 shadow-lg p-2 rounded-md hover:scale-110 hover:drop-shadow-xl text-center m-auto"
          >
            Submit
          </button>
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
