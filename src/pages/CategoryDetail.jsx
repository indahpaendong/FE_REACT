import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

export default function CategoryDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catRes = await api.get(`/categories/${id}`);
        const articleRes = await api.get(`/articles?category=${id}`);

        setCategory(catRes.data);
        setArticles(articleRes.data);
      } catch (err) {
        console.error("Error fetching category detail", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!category) return <p>Kategori tidak ditemukan.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">
        Kategori: {category.name}
      </h1>

      <h2 className="text-xl font-semibold mb-2">Artikel dalam kategori ini:</h2>

      {articles.length === 0 ? (
        <p>Belum ada artikel.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {articles.map((a) => (
            <li key={a.id} className="border p-3 rounded">
              <h3 className="text-lg font-bold">{a.title}</h3>
              <p>{a.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}