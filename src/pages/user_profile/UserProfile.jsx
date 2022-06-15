import "./user_profile.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAuth, useToast } from "../../contexts";
import { Button, PostCard } from "../../components";
import { followUser, getUser, unfollowUser } from "../../services";
import { EditUserModal } from "../../components/edit-user_modal/EditUserModal";
import { UserStats } from "./components/UserStats";

const UserProfile = () => {
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
      <img
        className="cover-image"
        src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600"
        alt="cover"
      />
      <section className="user-info-section">
        <div>
          <div className="avatar avatar-m">
            <img
              src={profile_pic}
              className="user-img"
              alt={username}
              title={username}
            />
          </div>

          <p className="body-l">
            {firstName} {lastName}
          </p>
          <p>{bio}</p>
          <p>{website}</p>
        </div>
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
        {username === currUserName && (
          <>
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
          </>
        )}
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
export default UserProfile;