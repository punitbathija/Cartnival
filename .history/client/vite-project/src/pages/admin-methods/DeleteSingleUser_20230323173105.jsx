import React, { useState } from "react";
import axios from "axios";

const DeleteSingleUser = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  const handleDeleteSingleUser = async (e) => {
    const customer = searchQuery;
    e.preventDefault();
    await axios
      .delete(`${api}admin/user/${customer}`)
      .then((res) => {
        console.log(res);
        setTokenData("Sucessfully deleted user");
      })
      .catch((error) => {
        setError("Cannot find user");
      });
  };
  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <h1 className="text-3xl py-6 text-cyan-500">User Details</h1>
      <form onSubmit={handleDeleteSingleUser} method="post">
        <input
          type="text"
          className="border-2 p-2 dark:text-black my-2"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <br />
        <button
          className="text-xl border-2 p-1.5 my-2 bg-cyan-700"
          onClick={handleDeleteSingleUser}
        >
          GO
        </button>
        {tokenData && <p>{tokenData}</p>}
      </form>
    </div>
  );
};

export default DeleteSingleUser;
