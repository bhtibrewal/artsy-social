import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaTelegramPlane } from "../../assets/icons";
import { useToast } from "../../contexts";
import { addComment, addReply } from "../../services";
import { updatePosts } from "../../redux/reducers/postsSlice";

export const CommentSection = (props) => {
  const { currProfilePic, postId, commentId } = props;
  const { showToast } = useToast();
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const commentHandler = () => {
    if (comment === "") {
      showToast({ title: "enter comment", type: "error" });
    } else {
      setComment("");
      if (commentId)
        addReply({
          postId,
          commentId,
          showToast,
          dispatch,
          updatePosts,
          reply: comment,
        });
      else addComment({ postId, showToast, dispatch, updatePosts, comment });
    }
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
      <button
        className={`btn post-comment-btn ${comment === "" && "disabled-btn"}`}
        onClick={commentHandler}
      >
        <FaTelegramPlane />
      </button>
    </div>
  );
};
