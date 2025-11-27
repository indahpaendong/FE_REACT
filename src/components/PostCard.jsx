import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div style={cardStyle}>
      <img
        src={post.thumbnail}
        alt={post.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 120)}...</p>

      <Link to={`/post/${post.id}`}>Baca Selengkapnya</Link>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  borderRadius: "10px",
};

export default PostCard;
