import "./user_profile.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegUser } from "../../assets/icons";
import { useAuth, useToast } from "../../contexts";
import { Button } from "../../components";
import { followUser, getUser, unfollowUser } from "../../services";
import { EditUserModal } from "../../components/edit-user_modal/EditUserModal";

export const UserProfile = () => {
  const { username } = useParams();
  const [userToShow, setUserToShow] = useState({});
  const {
    _id,
    profile_pic,
    firstName,
    lastName,
    bio,
    followers = [],
    following = [],
  } = userToShow;

  const { showToast } = useToast();
  const {
    userData: { username: currUserName },
    userDataDispatch,
  } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    getUser({ username, setUserToShow,userDataDispatch, showToast });
  }, [username]);

  const isFollowedByCurrUser = followers.some(
    (user) => user.username === currUserName
  );
  const followHandler = () => {
    isFollowedByCurrUser
      ? unfollowUser({ unfollowUserId: _id,setUserToShow, userDataDispatch, showToast })
      : followUser({ followUserId: _id,setUserToShow, userDataDispatch, showToast });
  };
  const openEditModal = () => {
    setShowEditModal(true);
  };

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
        <p>{bio}</p> 
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
        <Button className="outline-btn-primary" onClick={openEditModal}>
          Edit Profile
        </Button>
      )}
      {showEditModal && (
        <EditUserModal
          userToShow={userToShow}
          setUserToShow={setUserToShow}
          setShowEditModal={setShowEditModal}
        />
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
