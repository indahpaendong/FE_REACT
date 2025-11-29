import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetail from "./pages/PostDetail";
import EditPost from "./pages/EditPost";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Archive from "./pages/Archive";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import CategoryDetail from "./pages/CategoryDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([
    // contoh post awal
    { id: 1, title: "The Beauty of Minimalist Life", content: "Learn how minimalism can bring clarity and calmness..." },
    { id: 2, title: "Top 5 iOS Design Inspirations", content: "Soft shapes, smooth shadows, clean space — here’s how to create it." },
    { id: 3, title: "How to Stay Productive", content: "Simple steps to boost your productivity every day." },
    { id: 4, title: "Aesthetic Room Setup", content: "Soft lighting, warm colors, and cozy vibes." },
  ]);

  // Fungsi untuk menambahkan post baru
  const addPostToList = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage posts={posts} isLoggedIn={isLoggedIn} />} />
          <Route path="/create" element={<CreatePost isLoggedIn={isLoggedIn} onPostCreated={addPostToList} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
