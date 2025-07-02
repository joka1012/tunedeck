import "./Post.css";

type PostProps = {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  caption: string;
  likes: number;
  timestamp: string;
};

function Post({
  username,
  avatarUrl,
  imageUrl,
  caption,
  likes,
  timestamp,
}: PostProps) {
  return (
    <div className="post shadow-md rounded-lg p-4">
      {/* Header */}
      <div className="mb-2">
        <img src={avatarUrl} alt={username} className="avatar-image" />
        <span className="font-black">{username}</span>
        <div className="topnav-right">
          <button id="followBtn" className="follow-button">
            Follow
          </button>
          <i className="bi bi-three-dots post-dots"></i>
        </div>
      </div>

      {/* Bild */}
      <div className="mb-2">
        <img src={imageUrl} alt="Post content" className="post-image" />
      </div>

      {/* Beschreibung */}
      <div className="text-sm text-gray-800 mb-1">
        <span className="font-semibold mr-1">{username}</span>
        {caption}
      </div>

      {/* Likes & Zeit */}
      <div className="text-xs text-gray-500 mt-1">
        {likes} Likes • {new Date(timestamp).toLocaleString()}
      </div>
    </div>
  );
}

export default Post;
