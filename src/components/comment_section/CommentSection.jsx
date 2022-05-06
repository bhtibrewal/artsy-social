import React, { useState } from "react";
import { FaTelegramPlane } from "../../assets/icons";
import { usePosts, useToast } from "../../contexts";
import { addComment } from "../../services";

export const CommentSection = (props) => {
  const { currProfilePic, _id } = props;
  const { showToast } = useToast();
  const { postsStateDispatch } = usePosts();

  const [comment, setComment] = useState("");

  const commentHandler = () => {
    setComment("");
    addComment({ postId: _id, showToast, postsStateDispatch, comment });
  };
  return (
    <div className="comment-section flex-align-center">
      <div className="avatar avatar-s">
        <img src={currProfilePic} alt="user-avatar" />
      </div>
      <input
        type="text"
        className="comment-input"
        placeholder="Write comment here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="btn post-comment-btn" onClick={commentHandler}>
        <FaTelegramPlane />
      </button>
    </div>
  );
};
