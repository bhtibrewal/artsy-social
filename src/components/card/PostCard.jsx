import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaTelegramPlane,
  BsBookmark,
} from "../../assets/icons";
import { useAuth } from "../../contexts/AuthContext";
import { likePost } from "../../services";

export const PostCard = (props) => {
  const {
    title,
    content,
    image,
    firstName,
    lastName,
    username,
    likes: { likeCount },
  } = props;

  const location = useLocation();
  const navigate = useNavigate();
  const { isUserLoggedIn } = useAuth();
  const likeHandler = () => {
    isUserLoggedIn
      ? likePost({ postId: props._id })
      : navigate("/sign-in", { from: location });
  };

  return (
    <div className="card post-card">
      <div className="flex-align-center">
        <div className="avatar avatar-s">
          <img
            src="https://avatars.githubusercontent.com/u/42600164?v=4"
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
      </div>
      {image && <img alt={title} src={image} />}
      <div className="post-content">
        <p className="body-l">{title} </p>
        <p>{content}</p>
      </div>
      <div className="post-actions">
        <span className="post-actions-icons" onClick={likeHandler}>
          <FaRegHeart />
        </span>
        <span className="post-actions-icons">
          <FaRegComment />
        </span>
        <span className="post-actions-icons">
          <FaTelegramPlane />
        </span>
        <span className="post-actions-icons">
          <BsBookmark />
        </span>
        <p>{likeCount} Likes</p>
        <p> comments</p>
        <p> shares</p>
      </div>
      {
        <div className="comment-section flex-align-center">
          <div className="avatar avatar-s">
            <img
              src="https://avatars.githubusercontent.com/u/42600164?v=4"
              alt="user-avatar"
            />
          </div>
          <input
            type="text"
            className="comment-input"
            placeholder="Write comment here..."
          />
          <button className="btn post-comment-btn">
            <FaTelegramPlane />
          </button>
        </div>
      }
    </div>
  );
};

/* kept for future use
<iframe width="560" height="315" src="https://www.youtube.com/embed/a7rZGmBgHqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */
