import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
// localStorage.setItem("user", JSON.stringify(user));

const Success = () => {
  const user = useSelector(selectUser);
  return (
    user && (
      <div className="flex py-6 flex-wrap justify-center justify-items-center align-middle text-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden">
        <h1>Congratulations {user.name} Payment Successfull</h1>
      </div>
    )
  );
};

export default Success;
