import React, { useState } from "react";
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

  const handleDeleteSingleProduct = async (e) => {
    const customer = searchQuery;
    e.preventDefault();
    await axios
      .delete(`${api}admin/user/${customer}`)
      .then((res) => {
        setTokenData(res.data.customer);
      })
      .catch((error) => {
        setError("Cannot find user");
      });
  };

  return (
    <div className="md:flex m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="">
        <h1 className="text-3xl text-cyan-500">User Details</h1>
        <form onSubmit={handleFetchSingleUser} method="post">
          <input
            type="text"
            className="py-2 w-full text-center border-2 dark:text-black "
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <br />
          <button
            className="my-2 text-xl border-2 p-1.5 bg-cyan-700"
            onClick={handleFetchSingleUser}
          >
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          {tokenData && (
            <div>
              <p className="md:text-2xl">Name:- {tokenData.name}</p>
              <p className="md:text-2xl">Email:- {tokenData.email}</p>
              <p className="md:text-2xl">Role:- {tokenData.role}</p>
              <br />
              <div className="flex flex-col m-auto">
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
                  className="my-4 text-xl border-2 p-1.5 bg-cyan-700 w-[50%] m-auto"
                  onClick={handleModifyRole}
                >
                  Modify Role
                </button>

                <button
                  className="text-xl border-2 p-1.5 bg-cyan-700 w-[50%] m-auto"
                  onClick={handleDeleteSingleProduct}
                >
                  Delete User
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
