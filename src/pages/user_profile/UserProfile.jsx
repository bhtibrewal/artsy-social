import "./user_profile.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegUser } from "../../assets/icons";
import { useAuth, useToast } from "../../contexts";
import { Button } from "../../components";
import { followUser, getUser } from "../../services";

export const UserProfile = () => {
  const { username } = useParams();
  const [userToShow, setUserToShow] = useState({});
  const {
    _id,
    profile_pic,
    firstName,
    lastName,
    followers = [],
    following = [],
  } = userToShow;

  const { showToast } = useToast();
  const {
    userData: { username: currUserName },
    userDataDispatch,
  } = useAuth();

  useEffect(() => {
    getUser({ username, setUserToShow, showToast });
  }, [username]);
  const followHandler = () => {
    console.log("clicked");
    followUser({ followUserId: _id });
  };
  const isFollowedByCurrUser = followers.some(
    (user) => user.username === currUserName
  );

  return (
    <main className="main">
      <section>
        <div className="avatar avatar-s">
          <img
            src={profile_pic}
            className="user-img"
            alt={username}
            title={username}
          />
        </div>
        <p>
          {firstName} {lastName}
        </p>
      </section>
      {username !== currUserName ? (
        <Button
          className={
            isFollowedByCurrUser ? "outline-btn-primary" : "btn-primary"
          }
          onClick={followHandler}
        >
          {isFollowedByCurrUser ? "Following" : "Follow"}
        </Button>
      ) : (
        <Button className="outline-btn-primary">Edit Profile</Button>
      )}
      <section className="user-stats">
        <div className="stats-cards followers-card">
          <span className="stats-card-icon">
            <FaRegUser />
          </span>
          <span>Followers</span>
          <p className="body-l "> {followers?.length}+ </p>
        </div>
        <div className="stats-cards following-card">
          <span className="stats-card-icon">
            <FaRegUser />
          </span>
          <span>Following</span>
          <p className="body-l"> {following?.length}+ </p>
        </div>
        <div className="stats-cards posts-card">
          <span className="stats-card-icon">
            <FaRegUser />
          </span>
          <span>Posts</span>
          <p className="body-l"> 100 </p>
        </div>
      </section>
    </main>
  );
};
