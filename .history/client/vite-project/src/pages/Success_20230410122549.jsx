import React from "react";
const user = JSON.parse(localStorage.getItem("user"));
localStorage.setItem("user", JSON.stringify(user));
const Success = () => {
  return <div>Congratulations Payment Successfull</div>;
};

export default Success;
