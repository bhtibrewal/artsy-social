import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaTelegramPlane,
  BsBookmark,
  BsBookmarkFill,
  BsThreeDotsVertical,
  FiEdit,
  FiDelete,
} from "../../assets/icons";
import { useAuth, useToast } from "../../contexts";
import {
  bookmarkPost,
  likePost,
  removeBookmark,
  dislikePost,
  deletePost,
} from "../../services";
import { NewPostSection } from "../create_new_post/NewPostSection";
import { UserSection, CommentSection } from "../index";
import { LikedByModal } from "../likedby_modal/LikedByModal";
import { updatePosts } from "../../redux/reducers/postsSlice";
import { ImageRenderer } from "../image_renderer/ImageRenderer";

export const PostCard = (props) => {
  const {
    _id,
    id,
    title,
    content,
    image,
    firstName,
    lastName,
    username,
    profile_pic,
    comments,
    likes: { likeCount, likedBy },
  } = props;

  const location = useLocation();
  const navigate = useNavigate();
  const [isLikedByModalVisible, setIsLikedByModalVisible] = useState(false);
  const [showPostMenuDropdown, setShowPostMenuDropdown] = useState(false);
  const [showEditPostModal, setShowEditPostModal] = useState(false);

  const {
    isUserLoggedIn,
    userData: { username: currentUser, bookmarks, profile_pic: currProfilePic },
    userDataDispatch,
  } = useAuth();
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const isLiked = likedBy.some((user) => {
    return user.username === currentUser;
  });
  const isBookmarked = bookmarks?.includes(_id);

  const likeHandler = () => {
    if (isUserLoggedIn)
      isLiked
        ? dislikePost({ postId: _id, dispatch, updatePosts, showToast })
        : likePost({ postId: _id, dispatch, updatePosts, showToast });
    else navigate("/sign-in", { from: location });
  };

  const bookmarkHandler = () => {
    isUserLoggedIn
      ? isBookmarked
        ? removeBookmark({ postId: _id, userDataDispatch, showToast })
        : bookmarkPost({ postId: _id, userDataDispatch, showToast })
      : navigate("/sign-in", { from: location });
  };
  const editPostHandler = () => {
    setShowEditPostModal(true);
  };

  return (
    <div className="card post-card">
      <div className="flex-align-center">
        <UserSection user={{ username, profile_pic, firstName, lastName }} />
        <div className="post-menu">
          {username === currentUser ? (
            <button
              className="post-menu-btn"
              onClick={() => setShowPostMenuDropdown((prev) => !prev)}
            >
              <BsThreeDotsVertical />
            </button>
          ) : (
            <span className="post-actions-icons" onClick={bookmarkHandler}>
              {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
            </span>
          )}
          {showPostMenuDropdown && (
            <div className="dropdown">
              <p
                className="flex-align-center"
                onClick={() => editPostHandler()}
              >
                <FiEdit />
                Edit
              </p>
              <p
                className="flex-align-center"
                onClick={() =>
                  deletePost({ postId: _id, dispatch, updatePosts, showToast })
                }
              >
                <FiDelete />
                Delete
              </p>
            </div>
          )}
        </div>
      </div>

      {image && <ImageRenderer alt={title} src={image} />}

      <div className="post-content">
        <p className="body-l">{title} </p>
        <p>{content}</p>
      </div>
      <div className="post-actions">
        <span className="post-actions-icons" onClick={likeHandler}>
          {isLiked ? <FaHeart /> : <FaRegHeart />}
        </span>
        <span className="post-actions-icons">
          <FaRegComment />
        </span>
        <span className="post-actions-icons">
          <FaTelegramPlane />
        </span>

        <p
          className="likes-count"
          onClick={() => likeCount && setIsLikedByModalVisible(true)}
        >
          {likeCount} Likes
        </p>
        <Link to={`/post/${id}`}>
          {" "}
          <p> {comments.length} comments</p>
        </Link>
      </div>

      <CommentSection postId={_id} currProfilePic={currProfilePic} />

      {/* modals */}
      {isLikedByModalVisible && (
        <LikedByModal
          likedBy={likedBy}
          setIsLikedByModalVisible={setIsLikedByModalVisible}
        />
      )}
      {showEditPostModal && (
        <NewPostSection
          post={props}
          setShowEditPostModal={setShowEditPostModal}
        />
      )}
    </div>
  );
};

/* kept for future use
<iframe width="560" height="315" src="https://www.youtube.com/embed/a7rZGmBgHqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */
