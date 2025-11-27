import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Technology" },
  { id: 2, name: "Education" },
  { id: 3, name: "Lifestyle" },
  { id: 4, name: "Business" },
];

export default function CategoryList() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Categories</h2>

      <ul className="flex flex-col gap-2">
        {categories.map((cat) => (
          <li key={cat.id} className="border p-2 rounded hover:bg-gray-100">
            <Link to={`/category/${cat.id}`}>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
