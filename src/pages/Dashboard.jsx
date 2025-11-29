import React, { useState } from "react";
import api from "../services/api";
import CategoryList from "../components/CategoryList";
import "../assets/Dashboard.css"; // import CSS

export default function Dashboard() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      await api.post("/categories", { name });
      setName("");
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  return (
    <div className="dashboard-page">
      <h1>Dashboard Admin</h1>

      <form onSubmit={addCategory}>
        <label>Tambah Kategori Baru</label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama kategori..."
          required
        />

        <button type="submit">Tambah Kategori</button>

        {saved && <p className="success-msg">Kategori berhasil ditambahkan!</p>}
      </form>

      <h2>Daftar Semua Kategori</h2>
      <CategoryList />
    </div>
  );
}
