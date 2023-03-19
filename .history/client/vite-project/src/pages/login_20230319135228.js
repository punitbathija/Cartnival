import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(err);
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <p className="logo-text">
          Converse Up! <img src={shoe} className="logo" alt="logo" />
        </p>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="enter your email id" />
          <input type="password" placeholder="enter a password" />
          <button className="btn">
            Charge In!
            <img src={run} className="icon" alt="run" />
          </button>

          <button className="btn" onClick={signInWithGoogle}>
            Charge In using <GoogleIcon />
          </button>
          {err && (
            <span
              style={{
                color: "black",
                textAlign: "center",
              }}
            >
              <ErrorIcon color="error" />
              Something went wrong!
            </span>
          )}
        </form>
        <p className="login">
          don't have an account with us?
          <span style={{ color: "cyan", marginLeft: "5px" }}>
            <Link to="/register"> register </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
