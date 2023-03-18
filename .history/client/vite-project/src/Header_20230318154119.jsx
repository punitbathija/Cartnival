import React from "react";

export const Header = () => {
  return (
    <>
      <div className="flex justify-center ">
        <nav className="self-center w-full max-w-7xl  ">
          <div className="flex flex-col  justify-around items-center md:items-start border-b-2">
            <h1 className="uppercase py-4 text-2xl font-sans font-bold px-14 drop-shadow-2xl">
              cartnival
            </h1>
            <ul className="flex  items-center text-sm md:text-[18px] font-bold  md:px-10">
              <li className="hover:underline  underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                <a href="#">Shop</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                <a href="#">Categories</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
