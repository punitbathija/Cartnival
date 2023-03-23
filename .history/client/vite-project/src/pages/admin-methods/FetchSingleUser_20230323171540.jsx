import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchSingleUser = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [role, setRole] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

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
        setError("Cannot find user");
      });
  };

  const handleModifyRole = async (e) => {
    const customer = searchQuery;
    e.preventDefault();
    await axios
      .put(`${api}admin/user/${customer}`, {
        role,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono h-[85.5vh]">
      <div className="">
        <h1 className="text-3xl py-6 text-cyan-500">User Details</h1>
        <form className="flex" onSubmit={handleFetchSingleUser} method="post">
          <input
            type="text"
            className="border-2 p-2 dark:text-black my-2"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="text-xl border-2 p-1.5 my-2 bg-cyan-700"
            onClick={handleFetchSingleUser}
          >
            GO
          </button>
          {tokenData && (
            <div>
              <p className="md:text-2xl">Name:- {tokenData.name}</p>
              <p className="md:text-2xl">Email:- {tokenData.email}</p>
              <p className="md:text-2xl">Role:- {tokenData.role}</p>
              <br />
              <div className="flex flex-col justify-center align-middle justify-items-center m-auto">
                <select
                  className="border-2 text-black text-xl"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option className="border-2" value="admin">
                    admin
                  </option>
                  <option className="border-2" value="customer">
                    customer
                  </option>
                </select>

                <button
                  className="text-xl border-2 p-1.5 my-2 bg-cyan-700 w-[50%] m-auto"
                  onClick={handleModifyRole}
                >
                  Modify Role
                </button>
              </div>
            </div>
          )}
          {error && <p>{error} </p>}
        </form>
      </div>
    </div>
  );
};

export default FetchSingleUser;
