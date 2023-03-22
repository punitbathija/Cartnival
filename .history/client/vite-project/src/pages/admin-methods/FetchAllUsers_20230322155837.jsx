import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAllUsers = () => {
  const [tokenData, setTokenData] = useState("");
  const [error, setError] = useState("");
  const api = import.meta.env.VITE_REACT_APP_BACKEND;

  useEffect(() => {
    async function handleFetchAllUsers() {
      const result = await axios
        .get(`${api}admin/getallusers`)
        .then((res) => {
          console.log(res);
          setTokenData(res.data);
        })
        .catch((error) => setError("Cannot fetch user details please sign in"));
    }
    handleFetchAllUsers();
  }, []);

  return (
    <div className="md:flex p-24 justify-center gap-36 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="my-2">
        <h1 className="text-3xl py-6 text-cyan-500">All users</h1>
        {tokenData.allCustomers.map((customer) => {
          return (
            <div key={customer._id}>
              <p>Name:- {customer.name}</p>
              <p>Email:- {customer.email}</p>
              <p>Role:- {customer.role}</p>
              <p>Date:- {customer.createdAt.trim("T")}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchAllUsers;
