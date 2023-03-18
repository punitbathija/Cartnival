import React from "react";

export const Header = () => {
  return (
    <>
      <div class="flex justify-center ">
        <nav class="self-center w-full max-w-7xl  ">
          <div class="flex flex-col  justify-around items-center md:items-start border-b-2">
            <h1 class="uppercase py-4 text-2xl font-sans font-bold px-10">
              fashionhub
            </h1>
            <ul class="flex  items-center text-sm md:text-[18px] font-bold  md:px-10">
              <li class="hover:underline  underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                <a href="#">Home</a>
              </li>
              <li class="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                <a href="#">Contact</a>
              </li>
              <li class="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                <a href="#">Services</a>
              </li>
              <li class="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="flex justify-center  ">
        <div class="flex flex-col md:flex-row space-y-2  items-center justify-center max-w-7xl w-full p-4">
          <div class="w-full md:w-1/2 mx-2 h-96  overflow-hidden  ">
            <img
              src="https://source.unsplash.com/random/500x500/?man"
              alt=""
              class="h-full w-full"
            />
          </div>
          <div class="w-full md:w-1/2 mx-2 h-96 ">
            <div class="flex flex-col space-y-2">
              <div class="h-48 w-full   overflow-hidden  ">
                <img
                  src="https://source.unsplash.com/random/300x200/?man"
                  alt=""
                  class="h-full w-full"
                />
              </div>
              <div class="h-48 w-full flex space-x-1 p-2">
                <div class="h-full w-1/2 overflow-hidden  ">
                  <img
                    src="https://source.unsplash.com/random/200x200/?man"
                    alt=""
                    class="h-full w-full"
                  />
                </div>
                <div class="h-full w-1/2  overflow-hidden  ">
                  <img
                    src="https://source.unsplash.com/random/200x200/?man"
                    alt=""
                    class="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </>
  );
};
