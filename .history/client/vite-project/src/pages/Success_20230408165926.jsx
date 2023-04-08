import React from "react";
import { selectUser } from "../userSlice";
import { useSelector } from "react-redux";

const Success = () => {
  return <div>Congratulations{user.name} Payment Successfull</div>;
};

export default Success;
