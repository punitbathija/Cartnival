import React, { useState } from "react";
import axios from "axios";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}myprofile/password/update`, {
        oldPassword: oldPassword,
        password: password,
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
            placeholder="Enter password"
          />
          <p className="md:text-2xl">
            New Password<span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="border-2 p-2 dark:text-black my-2"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
          <br />
          <button
            className="flex gap-2 bg-cyan-700 shadow-lg p-2 rounded-md hover:scale-110 hover:drop-shadow-xl text-center m-auto my-4"
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
