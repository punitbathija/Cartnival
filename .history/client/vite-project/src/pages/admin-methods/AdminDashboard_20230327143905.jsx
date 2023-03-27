import React, { useState } from "react";
import FetchAllUsers from "./FetchAllUsers";
import { useSelector } from "react-redux";
import { selectUser } from "../../userSlice";
import FetchSingleUser from "./FetchSingleUser";

export const AdminDashboard = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const [showFetchAllUsers, setShowFetchAllUsers] = useState(false);
  const [showFetchSingleUser, setShowFetchSingleUser] = useState(false);

  const handleFetchAllUsers = () => {
    setShowFetchAllUsers(true);
  };

  const closeFetchAllUsers = () => {
    setShowFetchAllUsers(false);
  };

  const handleFetchSingleUser = () => {
    setShowFetchSingleUser(true);
  };

  const closeFetchSingleUser = () => {
    setShowFetchSingleUser(false);
  };

  return (
    <div className="flex flex-col gap-4 p-24 text-center align-middle justify-items-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <h1 className="text-2xl text-cyan-500">Admin Dashboard</h1>
      <div className="md:flex justify-around">
        <button className="text-xl" onClick={handleFetchAllUsers}>
          Fetch All Users
        </button>
        <button className="text-xl" onClick={handleFetchAllUsers}>
          Fetch Single User By Id
        </button>
      </div>
      <div className="flex">
        {showFetchAllUsers && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={closeFetchAllUsers}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        {showFetchAllUsers && <FetchAllUsers />}
        {showFetchSingleUser && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={closeFetchAllUsers}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        {showFetchSingleUser && <FetchSingleUser />}
      </div>
    </div>
  );
};
