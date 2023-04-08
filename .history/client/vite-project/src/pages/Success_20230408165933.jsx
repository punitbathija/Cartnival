import React from "react";
import { selectUser } from "../userSlice";
import { useSelector } from "react-redux";

const Success = () => {
  const user = useSelector(selectUser);

  return <div>Congratulations Payment Successfull</div>;
};

export default Success;
