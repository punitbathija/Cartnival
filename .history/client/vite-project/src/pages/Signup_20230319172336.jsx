import React, { useState } from "react";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupData, setSignupData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api}signup`, {
        name,
        email,
        password,
      });
      console.log(response.data);
      setSignupData(response.data);
    } catch (error) {
      setError("invalid username or password");
    }
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-36 h-36"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>

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
            onClick={handleSignup}
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
