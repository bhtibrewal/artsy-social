import "./user_profile.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth, useToast, usePosts } from "../../contexts";
import { Button, PostCard } from "../../components";
import { followUser, getUser, unfollowUser } from "../../services";
import { EditUserModal } from "../../components/edit-user_modal/EditUserModal";
import { UserStats } from "./components/UserStats";

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
  const { postsState } = usePosts();
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    getUser({ username, setUserToShow, userDataDispatch, showToast });
  }, [username]);

  const isFollowedByCurrUser = followers.some(
    (user) => user.username === currUserName
  );
  const followHandler = () => {
    isFollowedByCurrUser
      ? unfollowUser({
          unfollowUserId: _id,
          setUserToShow,
          userDataDispatch,
          showToast,
        })
      : followUser({
          followUserId: _id,
          setUserToShow,
          userDataDispatch,
          showToast,
        });
  };
  const openEditModal = () => {
    setShowEditModal(true);
  };

  return (
    <main className="main">
      <section className="user-info">
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
      </section>

      {showEditModal && (
        <EditUserModal
          userToShow={userToShow}
          setUserToShow={setUserToShow}
          setShowEditModal={setShowEditModal}
        />
      )}
      <UserStats
        followersCount={followers?.length}
        followingCount={following?.length}
      />
      {postsState
        .filter((post) => post.username === "bhtibrewal")
        .map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
    </main>
  );
};
