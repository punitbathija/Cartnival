import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signin } from "../userSlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signinData, setSigninData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  const dispatch = useDispatch();

  const handleSignin = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}signin`, {
        withCredentials: true,
        email: email,
        password: password,
      })
      // .then((res) => {
      //   dispatch(signin({
      //     email:
      //   }))
        console.log(res);
        setSigninData(res.data.customer);
        setEmail("");
        setPassword("");
        let token = res.data.token;
        if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          document.cookie = "";
          document.cookie = `token=${token}`;
        }
      })
      .catch((error) => {
        setError("Invalid credentials");
        console.log(error);
      });
  };
  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">Sign In</h1>
        <form onSubmit={handleSignin} method="post">
          <p className="md:text-2xl">
            Email Id<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="md:text-2xl ">
            Password<span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="border-2 p-2 dark:text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className="text-2xl border-2 my-4 p-1 bg-cyan-700"
            onClick={handleSignin}
          >
            Sign In
          </button>
          {signinData && <p>Welcome, {signinData.name}</p>}
          {error && (
            <p>
              {error}{" "}
              <span className="text-red-600 cursor-pointer">
                Forgot Password?
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signin;
