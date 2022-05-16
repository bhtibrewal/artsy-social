import "./single-post_page.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth, } from "../../contexts";
import {useSelector} from 'react-redux';
import { Comment, CommentSection, Loader, UserSection } from "../../components";

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
  const { posts } = useSelector((state) => state.posts);

  const {
    userData: { profile_pic: currProfilePic },
  } = useAuth();

  useEffect(() => {
    const foundPost = posts?.find((post) => post.id === postId);
    if (foundPost) setPost(foundPost);
  }, [posts]);

  if (Object.values(post).length === 0) return <Loader />;

  return (
    <main className="main single-post_main">
      <div className="single-post">
        <div className="image-section">{image && <img alt={title} src={image} loading="lazy" />}</div>
        <div className="right-section">
          <UserSection user={{ username, profile_pic, firstName, lastName }} />
          <section className="comments">
            {comments.map((comment) => {
              return (
                <Comment
                  key={comment._id}
                  comment={comment}
                  currProfilePic={currProfilePic}
                  postId={_id}
                />
              );
            })}
          </section>
          <CommentSection currProfilePic={currProfilePic} postId={_id} />
        </div>
      </div>
    </main>
  );
};
