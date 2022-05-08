import { useState } from "react";
import { usePosts, useToast } from "../../contexts";
import { CommentSection } from "./CommentSection";
import { deleteComment } from "../../services";

export const Comment = (props) => {
  const {
    comment: {
      comment,
      profile_pic,
      firstName,
      lastName,
      username,
      _id: commentId,
      replies,
    },
    currProfilePic,
    postId,
  } = props;

  const [showReplySection, setShowReplySection] = useState(false);
  const { postStateDispatch } = usePosts();
  const { showToast } = useToast();
  const deleteCommentHandler = () => {
    deleteComment({ postStateDispatch, postId, commentId, showToast });
  };
  const deleteReplyHandler = () => {};

  return (
    <div className="comment ">
      <div className="avatar avatar-s">
        <img src={profile_pic} alt={username} />
      </div>
      <div>
        <p>
          {firstName} {lastName}
        </p>
        <p> {comment}</p>
        <button
          className="comment-action"
          onClick={() => setShowReplySection((prev) => !prev)}
        >
          Reply
        </button>
        <button className="comment-action" onClick={deleteCommentHandler}>
          Delete
        </button>
        {showReplySection && (
          <CommentSection
            currProfilePic={currProfilePic}
            postId={postId}
            commentId={commentId}
          />
        )}
        {replies.map(
          ({ reply, profile_pic, firstName, lastName, username }) => {
            return (
              <div className="comment">
                <div className="avatar avatar-s">
                  <img src={profile_pic} alt={username} />
                </div>
                <div>
                  <p>
                    {firstName} {lastName}
                  </p>
                  <p> {reply}</p>
                  <button
                    className="comment-action"
                    onClick={deleteReplyHandler}
                  >
                    {" "}
                    Delete
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
