import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../services/posts";
import React from "react";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <img
        src={post.thumbnail}
        style={{ width: "100%", maxHeight: "350px", objectFit: "cover" }}
      />
      <p>{post.content}</p>

      <Link to={`/edit/${id}`} className="btn-edit">
        Edit Post
      </Link>
    </div>
  );
};

export default PostDetail;
