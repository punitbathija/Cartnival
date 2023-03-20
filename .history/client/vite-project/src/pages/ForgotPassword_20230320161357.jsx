import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}forgotPassword`, {
        email: email,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        setError("Email id does not match our records");
        console.log(error);
      });

    setEmail("");
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">Sign In</h1>
        <form onSubmit={handleForgotPassword} method="post">
          <p className="md:text-2xl">
            Email Id<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="text-2xl border-2 my-4 p-1 bg-cyan-700"
            onClick={handleForgotPassword}
          >
            GO
          </button>
          {error && <p>{error} </p>}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
