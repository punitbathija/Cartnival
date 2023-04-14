import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
const user = JSON.parse(localStorage.getItem("user"));
// localStorage.setItem("user", JSON.stringify(user));

const Success = () => {
  const user = useSelector(selectUser);
  return user && <div>Congratulations {user.name} Payment Successfull</div>;
};

export default Success;
