import { useState } from "react";
import { FaRegSmile, MdGif, FiImage } from "../../../assets/icons";
import { Button } from "../../../components";
import { usePosts, useToast } from "../../../contexts";
import { createPost } from "../../../services";

export const NewPostSection = () => {
  const [postData, setPostData] = useState();
  const { postsStateDispatch } = usePosts();
  const { showToast } = useToast();
  const createNewPostHandler = () => {
    createPost({ postData, postsStateDispatch, showToast });
  };
  return (
    <section className="new-post_section">
      <div>
        <textarea
          value={postData}
          onChange={setPostData}
          className="new-post_textarea"
          placeholder="What's on your mind?..."
        />
      </div>
      <div className="new-post_actions ">
        <div className=" flex-align-center">
          <FaRegSmile className="icons emoji-icon" />
          <MdGif className="icons gif-icon" />
          <FiImage className="icons" />
        </div>

        <Button className="btn-primary" onClick={createNewPostHandler}>
          Post
        </Button>
      </div>
    </section>
  );
};
