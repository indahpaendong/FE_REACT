import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    padding: "15px",
    background: "#333",
    color: "#fff",
    display: "flex",
    gap: "20px"
  };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/search">Search</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
