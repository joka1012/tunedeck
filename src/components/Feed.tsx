import Post from "./Post.tsx";
import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <Post
        username="User1"
        avatarUrl="/src/assets/profilePic.png"
        imageUrl="/src/assets/post.webp"
        caption="Wunderschöner Tag!"
        likes={34}
        timestamp="2025-06-13T14:22:00"
      />
      <Post
        username="User1"
        avatarUrl="/src/assets/profilePic.png"
        imageUrl="/src/assets/post.webp"
        caption="Wunderschöner Tag!"
        likes={34}
        timestamp="2025-06-13T14:22:00"
      />
    </div>
  );
}

export default Feed;
