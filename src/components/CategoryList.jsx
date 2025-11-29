import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../services/categories";
import "../assets/CategoryList.css"; // import CSS

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data); 
      })
      .catch((err) => console.error("Error fetching categories", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link to={`/category/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
