import React, { useState } from "react";

// Dummy data artikel
const dummyPosts = [
  { id: 1, title: "Cara Membuat Blog", content: "Ini konten blog" },
  { id: 2, title: "Belajar React Router", content: "Routing itu penting" },
  { id: 3, title: "Tips Pemrograman Web", content: "Gunakan React dan Vite" },
];

const Search = () => {
  const [query, setQuery] = useState("");

  // Filter artikel berdasarkan judul
  const results = dummyPosts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Pencarian Artikel</h1>

      <input
        type="text"
        placeholder="Cari artikel..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          marginTop: "20px",
          padding: "10px",
          width: "300px",
          fontSize: "16px",
        }}
      />

      <div style={{ marginTop: "20px" }}>
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
