import React, { useState } from "react";
import "../assets/Search.css";

// Dummy data artikel
const dummyPosts = [
  { id: 1, title: "Cara Membuat Blog", content: "Ini konten blog" },
  { id: 2, title: "Belajar React Router", content: "Routing itu penting" },
  { id: 3, title: "Tips Pemrograman Web", content: "Gunakan React dan Vite" },
];

const Search = () => {
  const [query, setQuery] = useState("");

  const results = dummyPosts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      <h1>Pencarian Artikel</h1>

      <input
        type="text"
        placeholder="Cari artikel..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="search-results">
        {results.length === 0 ? (
          <p>Tidak ada artikel ditemukan</p>
        ) : (
          <ul>
            {results.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
