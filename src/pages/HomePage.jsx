import React, { useState, useEffect } from "react";
import "./assets/HomePage.css";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dummy posts
    setTimeout(() => {
      setPosts([
        { id: 1, title: "Post 1", content: "Lorem ipsum..." },
        { id: 2, title: "Post 2", content: "Dolor sit amet..." }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
