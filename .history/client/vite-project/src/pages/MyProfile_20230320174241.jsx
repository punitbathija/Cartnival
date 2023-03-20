import React, { useEffect, useState } from "react";
import axios from "axios";

const MyProfile = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  useEffect(() => {
    async function handleMyProfile() {
      await axios
        .get(`${api}myprofile`)
        .then((res) => {
          console.log(res);
          setTokenData("Profile Deatails");
        })
        .catch((error) => {
          setError("Authentication failed please sign in again");
          console.log(error);
        });
    }
    handleMyProfile();
  }, []);

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">My Profile</h1>
        {/* {tokenData} */}
      </div>
    </div>
  );
};

export default MyProfile;
