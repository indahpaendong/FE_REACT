import { useState } from "react";
import { createPost } from "../services/posts";
import React from "react";
import "../assets/CreatePost.css";

const CreatePost = ({ isLoggedIn, onPostCreated }) => {
  const [form, setForm] = useState({ title: "", content: "", thumbnail: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert("Silahkan login terlebih dahulu!");
      return;
    }

    const newPost = await createPost(form); // bisa disesuaikan dengan backend
    alert("Postingan berhasil dibuat!");

    if (onPostCreated) onPostCreated(newPost);

    setForm({ title: "", content: "", thumbnail: "" });
  };

  return (
    <div className="create-post-page">
      <h1>Buat Postingan Baru</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Judul"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Thumbnail URL"
          value={form.thumbnail}
          onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
        />
        <textarea
          placeholder="Isi konten"
          rows="6"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button type="submit">Publikasi</button>
      </form>
    </div>
  );
};

export default CreatePost;
