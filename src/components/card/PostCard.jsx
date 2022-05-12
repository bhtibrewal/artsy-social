import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaTelegramPlane,
  BsBookmark,
  BsBookmarkFill,
} from "../../assets/icons";
import { useAuth, usePosts, useToast } from "../../contexts";
import {
  bookmarkPost,
  likePost,
  removeBookmark,
  dislikePost,
} from "../../services";
import { UserSection, CommentSection } from "../index";
import { LikedByModal } from "../likedby_modal/LikedByModal";

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
  const {
    isUserLoggedIn,
    userData: { username: currentUser, bookmarks, profile_pic: currProfilePic },
    userDataDispatch,
  } = useAuth();
  const { postsStateDispatch } = usePosts();
  const { showToast } = useToast();

  const isLiked = likedBy.some((user) => {
    return user.username === currentUser;
  });
  const isBookmarked = bookmarks?.some((post) => post._id === _id);

  const likeHandler = () => {
    if (isUserLoggedIn)
      isLiked
        ? dislikePost({ postId: _id, postsStateDispatch, showToast })
        : likePost({ postId: _id, postsStateDispatch, showToast });
    else navigate("/sign-in", { from: location });
  };

  const bookmarkHandler = () => {
    isUserLoggedIn
      ? isBookmarked
        ? removeBookmark({ postId: _id, userDataDispatch, showToast })
        : bookmarkPost({ postId: _id, userDataDispatch, showToast })
      : navigate("/sign-in", { from: location });
  };

  return (
    <div className="card post-card">
      <UserSection user={{ username, profile_pic, firstName, lastName }} />

      {image && <img alt={title} src={image} />}
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
        <span className="post-actions-icons" onClick={bookmarkHandler}>
          {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
        </span>
        {username === currentUser && <button>delete post</button>}
        <p onClick={() => setIsLikedByModalVisible(true)}>{likeCount} Likes</p>
        <Link to={`/post/${id}`}>
          {" "}
          <p> {comments.length} comments</p>
        </Link>
        <p> shares</p>
      </div>
      {isLikedByModalVisible && (
        <LikedByModal
          likedBy={likedBy}
          setIsLikedByModalVisible={setIsLikedByModalVisible}
        />
      )}
      <CommentSection _id={_id} currProfilePic={currProfilePic} />
    </div>
  );
};

/* kept for future use
<iframe width="560" height="315" src="https://www.youtube.com/embed/a7rZGmBgHqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */
