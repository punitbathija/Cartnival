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
      
        </div>
      </div>
    </>
  );
};
