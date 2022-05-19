import "./user_profile.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAuth, useToast } from "../../contexts";
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
    website,
    bookmarks,
  } = userToShow;

  const { showToast } = useToast();
  const {
    userData: { username: currUserName },
    userDataDispatch,
  } = useAuth();
  const { posts } = useSelector((state) => state.posts);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showTab, setShowTab] = useState("posts");

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
    <main className="main user-page_main ">
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
        <p>{website}</p>
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
      <div className="tabs">
        <Button
          className={showTab === "posts" ? "active" : ""}
          onClick={() => setShowTab("posts")}
        >
          Posts
        </Button>
        <Button
          className={showTab === "bookmarks" ? "active" : ""}
          onClick={() => setShowTab("bookmarks")}
        >
          {" "}
          Bookmarks
        </Button>
        <Button
          className={showTab === "likes" ? "active" : ""}
          onClick={() => setShowTab("likes")}
        >
          {" "}
          Likes
        </Button>
      </div>
      {showTab === "posts" && (
        <div>
          {posts
            .filter((post) => post.username === username)
            .map((post) => (
              <PostCard key={post._id} {...post} />
            ))}
        </div>
      )}
      {showTab === "bookmarks" && (
        <div>
          {posts
            .filter((post) =>
              bookmarks.some((currPostId) => currPostId === post._id)
            )
            .map((post) => (
              <PostCard key={post._id} {...post} />
            ))}
        </div>
      )}
      {showTab === "likes" && (
        <div>
          {posts
            .filter((post) =>
              post.likes?.likedBy?.some((user) => user.username === username)
            )
            .map((post) => (
              <PostCard key={post._id} {...post} />
            ))}
        </div>
      )}
    </main>
  );
};
