import axios from "axios";
import React from "react";
const user = JSON.parse(localStorage.getItem("user"));
localStorage.setItem("user", JSON.stringify(user));
const api = import.meta.env.VITE_REACT_APP_BACKEND;

const Success = async () => {
  // const sessionData = await axios.post(`${api}api/webhook`);

  // console.log(sessionData);

  return user && <div>Congratulations {user.name} Payment Successfull</div>;
};

export default Success;
