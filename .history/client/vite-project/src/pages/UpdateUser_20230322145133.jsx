import React, { useState } from "react";
import axios from "axios";

const UpdatePassword = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}myprofile/update`, {
        name,
        email,
      })
      .then((res) => {
        console.log(res);
        setTokenData("Password successfully updated");
      })
      .catch((error) => {
        setError("Old password does not match our records");
        console.log(error);
      });

    setPassword("");
    setOldPassword("");
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">Update Password</h1>
        <form onSubmit={handleUpdatePassword} method="post">
          <p className="md:text-2xl">
            Old Password<span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="border-2 p-2 dark:text-black my-2"
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <p className="md:text-2xl">
            Update Password<span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="border-2 p-2 dark:text-black my-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className="text-xl border-2 p-1.5 my-2 bg-cyan-700"
            onClick={handleUpdatePassword}
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

export default UpdatePassword;
