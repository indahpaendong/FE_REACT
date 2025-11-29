import React, { useState } from "react";
import { saveToken } from "../utils/storage";
import "../assets/Login.css"; // import CSS

const Login = ({ setIsLoggedIn }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan token
    saveToken("dummy-token");

    // Update state global App.jsx
    if (setIsLoggedIn) setIsLoggedIn(true);

    alert("Login berhasil!");
  };

  return (
    <div className="login-page">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Masuk</button>
      </form>
    </div>
  );
};

export default Login;
