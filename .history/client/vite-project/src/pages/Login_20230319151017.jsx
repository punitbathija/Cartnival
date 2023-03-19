import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = import.meta.env.VITE_REACT_APP_BACKEND;
    const res = await axios.get(`${api}signin`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      window.location.href("/");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <div className="md:flex justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="">
        <form onSubmit={handleSubmit}>
          <p className="text-2xl" onChange={(e) => setEmail(e.target.value)}>
            Email Id
          </p>
          <input type="text" className="border-2 p-2" />
          <p
            className="text-2xl "
            onChange={(e) => setPassword(e.target.value)}
          >
            Password
          </p>
          <input type="password" className="border-2 p-2" />
          <br />
          <button className="text-2xl border-2 my-4 p-1 bg-cyan-700">
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
