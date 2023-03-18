import React, { useState, useEffect } from "react";

export const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="flex justify-center dark:bg-neutral-800 dark:text-white ease-in duration-200">
        <nav className="self-center w-full max-w-7xl">
          <div className="flex flex-col justify-around items-center border-b-2 ">
            <h1 className="uppercase py-2 text-2xl font-sans font-bold px-14 drop-shadow-2xl tracking-widest">
              cartnival
            </h1>
            <ul className="flex  items-center text-sm md:text-[18px] font-bold  md:px-10 tracking-wider">
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
              <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                <a href="#">
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
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="flex space-x-5 text-sm md:text-[16px]">
              <h1 className=" py-2 font-semibold hover:underline decoration-cyan-500  cursor-pointer">
                SignIn
              </h1>
              <h1 className=" py-2 font-semibold hover:underline decoration-cyan-500  cursor-pointer">
                SignUp
              </h1>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
