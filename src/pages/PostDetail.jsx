import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../services/posts";
import React from "react";
import "../assets/PostDetail.css"; // import CSS

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-detail-page">
      <h1>{post.title}</h1>
      <img src={post.thumbnail} alt={post.title} />
      <p>{post.content}</p>
      <Link to={`/edit/${id}`} className="btn-edit">
        Edit Post
      </Link>
    </div>
  );
};

export default PostDetail;
