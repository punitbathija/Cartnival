import React, { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleFetchSingleUser = async (e) => {
    const customer = "641814176ddc57b3c07f50ee" || req.params.customer;
    e.preventDefault();
    await axios
      .get(`${api}admin/user/${customer}`, {})
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">User Details</h1>
        <form onSubmit={handleResetPassword} method="post">
          <p className="md:text-2xl">
            Password<span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="border-2 p-2 dark:text-black my-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="md:text-2xl">
            Confirm Password<span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="border-2 p-2 dark:text-black my-2"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <button
            className="text-xl border-2 p-1.5 my-2 bg-cyan-700"
            onClick={handleResetPassword}
          >
            GO
          </button>
          {tokenData && <p>{tokenData}</p>}
          {error && <p>{error} </p>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
