import "./Account.css";

type AccountProps = {
  username: string;
  userAvatarUrl: string;
  following: number;
  follower: number;
  bio: string;
};

function Account({
  username,
  userAvatarUrl,
  following,
  follower,
  bio,
}: AccountProps) {
  return (
    <div className="acc-main">
      <div className="account">
        <img src={userAvatarUrl} alt={username} className="avatar-acc-image" />
        <div>
          <span className="username font-black">{username}</span>
          <button className="edit-profile">Edit profile</button>
          <div className="mt-2">
            <span className="acc_follower_btn font-black">
              {follower} Follower
            </span>
            <span className="acc_follower_btn font-black">
              {following} followed
            </span>
          </div>
          <div className="mt-2">
            <span className="bio font-black">{bio}</span>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Account;
