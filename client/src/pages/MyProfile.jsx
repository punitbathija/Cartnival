import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  const navigate = useNavigate();
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

  const handleUpdatePassword = () => {
    navigate("/myprofile/updatepassword");
  };

  const handleUpdateUser = () => {
    navigate("/myprofile/updateuserdetails");
  };
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
          <div className="flex justify-center align-middle justify-items-center m-auto">
            <button
              className="my-4 flex gap-3 bg-cyan-700 shadow-lg p-2 rounded-md hover:scale-110 hover:drop-shadow-xl"
              onClick={handleUpdatePassword}
            >
              Update Password
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </button>
          </div>
        )}

        {tokenData && (
          <div className="flex justify-center align-middle justify-items-center m-auto">
            <button
              className="flex gap-3 bg-cyan-700 shadow-lg p-2 rounded-md hover:scale-110 hover:drop-shadow-xl"
              onClick={handleUpdateUser}
            >
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
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
