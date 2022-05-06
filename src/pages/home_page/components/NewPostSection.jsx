import { useState } from "react";
import { FaRegSmile, MdGif, FiImage } from "../../../assets/icons";
import { Button } from "../../../components";
import { usePosts, useToast, useAuth } from "../../../contexts";
import { createPost } from "../../../services";

export const NewPostSection = ({
  setIsNewPostSectionVisible,
}) => {
  const initialPostData = { title: "", content: "", wordsLeft: 600 };
  const [postData, setPostData] = useState(initialPostData);

  const {
    userData: { username, profile_pic },
  } = useAuth();
  const { postsStateDispatch } = usePosts();
  const { showToast } = useToast();
  const createNewPostHandler = () => {
    createPost({ postData, postsStateDispatch, showToast });
    setPostData(initialPostData);
  };

  return (
    <div className="section-overlay">
    <section className="new-post_section">  
      <div className="new-post_flex">
        <div className="avatar avatar-s">
          <img
            src={profile_pic}
            className="user-img"
            alt={username}
            title={username}
          />
        </div>
        <div className='post_inputs'>
          <input
            type="text"
            name="title"
            placeholder='Title...'
            className="new-post_title"
            value={postData.title}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <textarea
            name="content"
            value={postData.content}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, content: e.target.value }))
            }
            className="new-post_content"
            placeholder="What's on your mind?..."
          />
        </div>
      </div>
      <div className="new-post_actions ">
        <div className=" flex-align-center">
          <FaRegSmile className="icons emoji-icon" />
          <MdGif className="icons gif-icon" />
          <FiImage className="icons" />
        </div>
        <p className='char-count'>{postData. wordsLeft - postData.content.length} </p>
        <Button className="btn-primary" onClick={createNewPostHandler}>
          Post
        </Button>
      </div>
    </section>
    </div>
  );
};
