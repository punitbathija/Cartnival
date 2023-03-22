import React, { useEffect, useState } from "react";
import axios from "axios";

const MyProfile = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  useEffect(() => {
    async function handleMyProfile() {
      const result = await axios.get(`${api}myprofile`);
      // console.log(result);
      if (result) {
        setTokenData(result);
        // console.log(tokenData);
      } else {
        setError("Cannot fetch user please sign in again");
      }
    }
    handleMyProfile();
  }, []);

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">My Profile</h1>
        {error && <p>{error}</p>}
        <h1 className="flex md:text-2xl text-xl">
          Name:- {tokenData && <p>{tokenData.data.customer.name}</p>}
        </h1>
        {tokenData && <p>{tokenData.data.customer.email}</p>}
      </div>
    </div>
  );
};

export default MyProfile;
