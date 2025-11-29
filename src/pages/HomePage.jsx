import React from "react";
import { Link } from "react-router-dom";
import "../assets/HomePage.css";

const HomePage = ({ posts, isLoggedIn }) => {
  if (!posts || posts.length === 0) return <p className="loading-text">Loading...</p>;

  return (
    <div className="home-wrapper">
      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">Home Page✨</h1>
        <p className="hero-subtitle">
          Soft. Clean. Aesthetic. Enjoy reading my curated stories.
        </p>
      </section>

      {/* Tombol Create Post */}
      {isLoggedIn && (
        <div style={{ margin: "20px 0" }}>
          <Link to="/create" className="btn-create-post">
            Buat Postingan Baru
          </Link>
        </div>
      )}

      {/* GRID POSTS */}
      <div className="post-grid">
        {posts.map((p) => (
          <div className="post-card" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
            <Link to={`/post/${p.id}`}>Baca Selengkapnya</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
