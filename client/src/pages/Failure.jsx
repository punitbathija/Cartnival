import React from "react";

const Failure = () => {
  return (
    <div className="px-4 py-6 flex-wrap justify-center justify-items-center align-middle text-center m-auto dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono overflow-hidden h-[100vh]">
      <h1 className="md:text-xl text-lg ">
        Uh no! something went wrong
        <span className="text-cyan-500"> {user.name} </span>
        your Purchase was failed❎
      </h1>
      <br />
      <h1 className="md:text-lg">
        Please{" "}
        <Link to="/signin">
          <span className="text-cyan-500">signin</span>
        </Link>{" "}
        again to view your orders
      </h1>
    </div>
  );
};

export default Failure;
