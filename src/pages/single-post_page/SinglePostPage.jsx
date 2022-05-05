import "./single-post_page.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth, usePosts } from "../../contexts";
import { CommentSection, Loader, UserSection } from "../../components";

export const SinglePostPage = () => {
  const [post, setPost] = useState({});
  const {
    _id,
    title,
    content,
    image,
    firstName,
    lastName,
    username,
    profile_pic,
    comments,
    likes: { likeCount, likedBy } = {},
  } = post;
  const { postId } = useParams();
  const { postsState } = usePosts();
  const {
    userData: { profile_pic: currProfilePic },
  } = useAuth();

  useEffect(() => {
    const foundPost = postsState?.find((post) => post.id === postId);
    if (foundPost) setPost(foundPost);
  }, [postsState]);

  if (Object.values(post).length === 0) return <Loader />;
  return (
    <main className="main">
      <div className="flex-align-center">
        <div>{image && <img alt={title} src={image} loading="lazy" />}</div>
        <div>
          <UserSection user={{ username, profile_pic, firstName, lastName }} />
          <section className="comments">
            {comments.map(({ comment, profile_pic, username }) => {
              return (
                <div className="comment">
                  <div className="avatar avatar-s">
                    <img src={profile_pic} alt={username} />
                  </div>
                    <p> {username}</p>
                  <p> {comment}</p>
                </div>
              );
            })}
          </section>
          <CommentSection currProfilePic={currProfilePic} _id={_id} />
        </div>
      </div>
    </main>
  );
};
