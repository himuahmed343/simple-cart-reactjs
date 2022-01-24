import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="container">
      <div className="content">
        <div className="input-group">
          <h1>Sign Up !!</h1>
          {error && <div className="alert">{error}</div>}
          <input
            className="email"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
          <hr
            style={{
              border: "1px solid #eee",
              width: "100%",
              margin: "10px 0",
            }}
          />

          <p>
            Already have an account, then
            <Link to="/login"> Login </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
