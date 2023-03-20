import React, { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleResetPassword = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}password/reset/:token`, {
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((res) => {
        console.log(res);
        setTokenData("Password successfully updated");
      })
      .catch((error) => {
        setError("Password & confirm password does not match");
        console.log(error);
      });

    setEmail("");
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">Reset Password</h1>
        <form onSubmit={handleResetPassword} method="post">
          <p className="md:text-2xl">
            Email Id<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setEmail(e.target.value)}
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
