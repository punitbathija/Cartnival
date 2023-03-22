import React, { useState } from "react";
import axios from "axios";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}myprofile/update`, {
        name,
        email,
      })
      .then((res) => {
        console.log(res);
        setTokenData("User details successfully updated");
      })
      .catch((error) => {
        setError("Error occured please sign in and try again");
        console.log(error);
      });
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">Update User Details</h1>
        <form onSubmit={handleUpdateUser} method="post">
          <p className="md:text-2xl">
            Name<span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="border-2 p-2 dark:text-black my-2"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="md:text-2xl">
            Email<span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="border-2 p-2 dark:text-black my-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button
            className="text-xl border-2 p-1.5 my-2 bg-cyan-700"
            onClick={handleUpdateUser}
          >
            GO
          </button>
          {tokenData && <p>{tokenData}</p>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
