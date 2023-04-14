import React from "react";
import ReactConfetti from "react-confetti";

const Success = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    user && (
      <div className="px-4 py-6 flex-wrap justify-center justify-items-center align-middle text-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden h-[100vh]">
        <ReactConfetti width={200} height={200} />
        <h1 className="md:text-xl text-lg">
          Congratulations<span className="text-cyan-500"> {user.name} </span>
          your Purchase was Successfull
        </h1>
        <br />
        <h1 className="md:text-lg">
          Please <span className="text-cyan-500">signin</span> again to view
          your orders
        </h1>
      </div>
    )
  );
};

export default Success;
