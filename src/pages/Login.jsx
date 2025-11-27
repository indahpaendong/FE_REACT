import React, { useState } from "react";
import { saveToken } from "../utils/storage";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "300px",
    marginTop: "20px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveToken("dummy-token");
    alert("Login berhasil!");
  };

  return (
    <div>
      <h1>Login</h1>

      <form style={formStyle} onSubmit={handleSubmit}>
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