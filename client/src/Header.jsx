import React, { useState, useEffect } from "react";
import axios from "axios";
import { selectUser, signin, signout } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectItems } from "./cartSlice";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const api = import.meta.env.VITE_REACT_APP_BACKEND;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectItems);
  let itemsCount = cartItems.length;

  useEffect(() => {
    if (user === null) {
      setIsLoggedin(false);
    } else {
      setIsLoggedin(true);
    }
  }, [user]);

  const signOut = async (e) => {
    e.preventDefault();
    axios
      .get(`${api}signout`)
      .then((res) => {
        console.log(res);
        axios.defaults.headers.common["Authorization"] = null;
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        dispatch(signout());
      })
      .then((err) => console.log(err));
  };

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
      <div className="flex bg-gray-50 justify-center sticky top-0 dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono z-10">
        <nav className="self-center w-full max-w-7xl">
          <div className="flex flex-col justify-around items-center border-b-2 py-1">
            <h1 className="cursor-default uppercase py-2 text-4xl md:text-5xl text-center font-sans font-bold px-14 drop-shadow-2xl tracking-widest">
              cartnival
            </h1>

            <ul className="flex  items-center text-sm md:text-[18px] font-bold  md:px-10">
              <li>
                {theme === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ease-in duration-500 cursor-pointer"
                    onClick={handleThemeSwitch}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ease-in duration-500 cursor-pointer"
                    onClick={handleThemeSwitch}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                )}
              </li>

              <Link to="/">
                <li className="hover:underline  underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                  Home
                </li>
              </Link>
              <Link to="/products">
                <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                  <a href="#">Shop</a>
                </li>
              </Link>
              <Link to="/categories">
                <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                  <a href="#">Categories</a>
                </li>
              </Link>
              <Link to="/cart">
                <li className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                  <a href="#">
                    {cartItems.length === 0 && (
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
                    )}
                    {cartItems.length !== 0 && (
                      <div className="flex">
                        <small className="ml-2">{itemsCount}</small>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="darkCyan"
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
                      </div>
                    )}
                  </a>
                </li>
              </Link>
            </ul>
            <div className="flex space-x-5 text-sm md:text-[16px]">
              {isLoggedin && (
                <div className="flex text-center justify-center align-middle justify-items-center m-auto gap-4">
                  <Link to="/myorders">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer hover:text-cyan-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                  </Link>
                  <p className="cursor-default">
                    Welcome{" "}
                    <span className="text-cyan-500 cursor-default">
                      {user && user.name}
                    </span>
                  </p>
                  <Link to="/myprofile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer hover:text-cyan-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer hover:text-cyan-500"
                    onClick={signOut}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </div>
              )}
              {!isLoggedin && (
                <div className="flex gap-4">
                  <Link to="/signin">
                    <h1 className=" py-2 font-semibold hover:underline decoration-cyan-500  cursor-pointer">
                      Sign In
                    </h1>
                  </Link>
                  <Link to="/signup">
                    <h1 className=" py-2 font-semibold hover:underline decoration-cyan-500  cursor-pointer">
                      Sign Up
                    </h1>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
