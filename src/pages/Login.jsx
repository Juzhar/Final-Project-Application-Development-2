import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("regular");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password");
      return;
    }

    try {
      login(username, password, selectedRole);

      navigate(from, { replace: true });
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Cook Inn</h2>
        <p className="login-subtitle">
          Access your saved favorite recipes
        </p>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>

            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Account Type</label>

            <select
              id="role"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="regular">Regular User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;