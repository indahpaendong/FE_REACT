import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "300px",
    marginTop: "20px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password dan konfirmasi tidak sama!");
      return;
    }

    alert("Registrasi berhasil!");
  };

  return (
    <div>
      <h1>Register</h1>

      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          placeholder="Nama Lengkap"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          placeholder="Konfirmasi Password"
          type="password"
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />

        <button type="submit">Daftar</button>
      </form>
    </div>
  );
};

export default Register;
