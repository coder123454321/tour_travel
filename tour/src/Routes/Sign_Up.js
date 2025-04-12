import React, { useState } from "react";
import Navbar from "../Components/Navbar";

function Sign() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with: ", formData);
      alert("Login Successful");
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Signing up with: ", formData);
      alert("Sign Up Successful");
    }
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <div className="form-container">
          <h2 className="form-heading">{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-wrapper">
              <label className="input-label">Email</label>
              <input
                type="email"
                name="email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-wrapper">
              <label className="input-label">Password</label>
              <input
                type="password"
                name="password"
                className="input-field"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {!isLogin && (
              <div className="input-wrapper">
                <label className="input-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="input-field"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <button type="submit" className="submit-button">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </p>
        </div>

        <style jsx>{`
          .auth-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f4f8;
          }

          .form-container {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
          }

          .form-heading {
            text-align: center;
            font-size: 2rem;
            color: #333;
            margin-bottom: 20px;
          }

          .auth-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .input-wrapper {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }

          .input-label {
            font-weight: bold;
            font-size: 14px;
            color: #333;
          }

          .input-field {
            padding: 12px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            outline: none;
            width: 100%;
          }

          .input-field:focus {
            border-color: #1e3a8a;
          }

          .submit-button {
            padding: 12px;
            background-color: #1e3a8a;
            color: white;
            border: none;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .submit-button:hover {
            background-color: #1e2d5c;
          }

          .toggle-link {
            text-align: center;
            color: #007bff;
            cursor: pointer;
            margin-top: 15px;
          }

          .toggle-link:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    </>
  );
}

export default Sign;
