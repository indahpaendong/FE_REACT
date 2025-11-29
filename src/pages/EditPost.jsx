import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById, updatePost } from "../services/posts";
import React from "react";
import "../assets/EditPost.css"; // import CSS

const EditPost = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", content: "", thumbnail: "" });

  useEffect(() => {
    getPostById(id).then((res) => setForm(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, form);
    alert("Berhasil diupdate!");
  };

  return (
    <div className="edit-post-page">
      <h1>Edit Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={form.title}
          placeholder="Judul Post"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          value={form.thumbnail}
          placeholder="URL Thumbnail"
          onChange={(e) => setForm({ ...form, thumbnail: e.target.value })}
        />
        <textarea
          value={form.content}
          rows="6"
          placeholder="Konten Post"
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default EditPost;
