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
      <div className="">
        <form onSubmit={handleSignup}>
          <p className="md:text-2xl" onChange={(e) => setEmail(e.target.value)}>
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
            SignIn
          </button>
          {signupData && <p>Welcome, {signupData.email}</p>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};
