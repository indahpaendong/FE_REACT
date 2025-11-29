import React from "react";
import { Link } from "react-router-dom";
import "../assets/Navbar.css"; // import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
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
