import React, { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  useEffect(() => {
    async function handleMyProfile() {
      const result = await axios
        .get(`${api}myorders`)
        .then((res) => {
          setTokenData(res);
        })
        .catch((error) => setError("Cannot fetch any order's"));
    }
    handleMyProfile();
  }, []);

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="my-2">
        <h1 className="text-3xl py-6 text-cyan-500">My Orders</h1>
        {error && <p>{error}</p>}
        <h1 className="flex md:text-xl"></h1>
      </div>
    </div>
  );
};

export default MyOrders;
