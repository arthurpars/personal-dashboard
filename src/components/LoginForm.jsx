import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { generateId } from "../utils/auth";

export default function LoginForm() {
  const { handleLogin } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim() && email.trim()) {
      const id = generateId();
      handleLogin(username.trim(), email.trim(), id);
      navigate(`/user/${id}`);
    }
  }

  return (
    <div className="login-page">
      <h1 className="login-title">Welcome Back</h1>
      <p className="login-subtitle">
        Sign in to access your personal dashboard
      </p>

      <div className="login-card">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="field-group">
            <label className="field-label">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Username
            </label>
            <input
              type="text"
              className="field-input"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 7L2 7" />
              </svg>
              Email
            </label>
            <input
              type="email"
              className="field-input"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-signin">
            Sign In
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
