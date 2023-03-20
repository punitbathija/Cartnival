import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signinData, setSigninData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleLogin = async (e) => {
    e.preventDefault();
    // Create checkout session
    axios.post("http://localhost:4000/api/v1/signin", {
      email: email,
      password: password,
    });
    setSigninData(session);
    console.log(session);
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <form onSubmit={handleLogin}>
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
            onClick={handleLogin}
          >
            SignIn
          </button>
          {signinData && <p>Welcome, {signinData.email}</p>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
