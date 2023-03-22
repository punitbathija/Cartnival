import React, { useEffect, useState } from "react";
import axios from "axios";

const MyProfile = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  useEffect(() => {
    async function handleMyProfile() {
      const result = await axios
        .get(`${api}myprofile`)
        .then((res) => {
          setTokenData(res);
        })
        .catch((error) => setError("Cannot fetch user details please sign in"));
    }
    handleMyProfile();
  }, []);

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="my-2">
        <h1 className="text-3xl py-6 text-cyan-500">My Profile</h1>
        {error && <p>{error}</p>}
        {tokenData && (
          <h1 className="flex md:text-xl">
            Name:- {tokenData && <p>{tokenData.data.customer.name}</p>}
          </h1>
        )}
        {tokenData && (
          <h1 className="flex md:text-xl">
            Email:- {tokenData && <p>{tokenData.data.customer.email}</p>}
          </h1>
        )}
        {tokenData && (
          <button className="text-xl border-2 p-1.5 my-2 bg-cyan-700">
            Update Password
          </button>
        )}

        {tokenData && (
          <button className=" flex text-xl border-2 p-1.5 my-2 bg-cyan-700">
            Update User Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
