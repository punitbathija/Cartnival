import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";

const Success = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    user && (
      <div className=" py-6 flex-wrap justify-center justify-items-center align-middle text-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden">
        <h1 className="text-xl">
          Congratulations {user.name} Payment Successfull
        </h1>
        <br />
        <h1 className="text-lg">Please sign in again to view your orders</h1>
      </div>
    )
  );
};

export default Success;
