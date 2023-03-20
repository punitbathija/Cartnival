import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupData, setSignupData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleSignup = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}signup`, {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        setSignupData(res.data.customer);
      })
      .catch((error) => {
        setError("Please enter all the * fields");
        console.log(error);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">Sign Up</h1>

        <form onSubmit={handleSignup}>
          <p className="md:text-2xl">
            Name<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <p className="md:text-2xl">
            Email Id<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setEmail(e.target.value)}
            email={email}
          />
          <p className="md:text-2xl ">
            Password<span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <button
            className="text-2xl border-2 my-4 p-1 bg-cyan-700"
            onClick={(e) => handleSignup}
          >
            Sign Up
          </button>
          {signupData && <p>Welcome, {signupData.name}</p>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};
