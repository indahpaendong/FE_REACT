import { useState } from "react";
import { createPost } from "../services/posts";
import React from "react";

const CreatePost = () => {
  const [form, setForm] = useState({ title: "", content: "", thumbnail: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(form);
    alert("Postingan berhasil dibuat!");
  };

  return (
    <div>
      <h1>Buat Postingan Baru</h1>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          placeholder="Judul"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Thumbnail URL"
          onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
        />
        <textarea
          placeholder="Isi konten"
          rows="6"
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />

        <button type="submit">Publikasi</button>
      </form>
    </div>
  );
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "500px",
};

export default CreatePost;
