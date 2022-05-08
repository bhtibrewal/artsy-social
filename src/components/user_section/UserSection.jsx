import { Link } from "react-router-dom";

export const UserSection = (props) => {
  const { username, profile_pic, firstName, lastName } = props.user;
  return (
    <Link
      to={`/user-profile/${username}`}
      className="flex-align-center user-section"
    >
      <div className="avatar avatar-s">
        <img
          src={profile_pic}
          className="user-img"
          alt={username}
          title={username}
        />
      </div>
      <div>
        <p className="user-name">
          {firstName} {lastName}
        </p>
        <p className="user-handle">{username}</p>
      </div>
    </Link>
  );
};
