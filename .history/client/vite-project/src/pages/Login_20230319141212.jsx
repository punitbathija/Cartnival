import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center dark:bg-neutral-800 dark:text-white ease-in duration-200 font-mono">
      <div className="my-4">
        <form>
          <p className="">Email Id</p>
          <input type="text" />
          <p>Password</p>
          <input type="text" />
          <br />
          <button>SignIn</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
