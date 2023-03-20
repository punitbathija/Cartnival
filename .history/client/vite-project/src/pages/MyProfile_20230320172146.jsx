import React, { useState } from "react";
import axios from "axios";

const MyProfile = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleMyProfile = async (e) => {
    e.preventDefault();
    await axios
      .get(`${api}myprofile`)
      .then((res) => {
        console.log(res);
        setTokenData("Profile Deatails");
      })
      .catch((error) => {
        setError("Authentication failed please sign in again");
        console.log(error);
      });

    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">Reset Password</h1>
        <form onSubmit={handleMyProfile} method="post">
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
            onClick={handleMyProfile}
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

export default MyProfile;
