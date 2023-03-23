import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchSingleUser = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  useEffect(() => {
    const handleFetchSingleUser = async (e) => {
      const customer = searchQuery;
      e.preventDefault();
      await axios
        .get(`${api}admin/user/${customer}`)
        .then((res) => {
          console.log(res);
          setTokenData(res.data.customer);
        })
        .catch((error) => {
          setError("Cannot find customer");
        });
    };
    handleFetchSingleUser();
  }, []);

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">User Details</h1>
        <form onSubmit={handleFetchSingleUser} method="post">
          <input
            type="text"
            className="border-2 p-2 dark:text-black my-2"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="text-xl border-2 p-1.5 my-2 bg-cyan-700"
            onClick={handleFetchSingleUser}
          >
            <p className="md:text-2xl">Name:- {tokenData.name}</p>
            <p className="md:text-2xl">Email:- {tokenData.email}</p>
            <p className="md:text-2xl">Email:- {tokenData.role}</p>
            <br />
            GO
          </button>
          {tokenData && <p>{tokenData}</p>}
          {error && <p>{error} </p>}

          <button onClick={handleFetchSingleUser}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FetchSingleUser;
