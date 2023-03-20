import React, { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupData, setSignupData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    return fetch(`${api}signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(name, email, password),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">Sign Up</h1>

        <form onSubmit={handleSignup}>
          <p className="md:text-2xl" onChange={(e) => setName(e.target.value)}>
            Name
          </p>
          <input type="text" className="border-2 p-2 dark:text-black" />

          <p className="md:text-2xl" onChange={(e) => setEmail(e.target.value)}>
            Email Id
          </p>
          <input type="text" className="border-2 p-2 dark:text-black" />
          <p
            className="md:text-2xl "
            onChange={(e) => setPassword(e.target.value)}
          >
            Password
          </p>
          <input type="password" className="border-2 p-2 dark:text-black" />
          <br />
          <button
            className="text-2xl border-2 my-4 p-1 bg-cyan-700"
            onClick={(e) => handleSignup}
          >
            Sign Up
          </button>
          {signupData && <p>Welcome, {signupData.email}</p>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};
