import axios from "axios";
import { useState, useRef } from "react";
import { FaRegSmile, MdGif, FiImage } from "../../assets/icons";
import { Button } from "../../components";
import { usePosts, useToast, useAuth } from "../../contexts";
import { createPost, editPost } from "../../services";

export const NewPostSection = ({
  post,
  setShowEditPostModal,
  setIsNewPostSectionVisible,
}) => {
  const initialPostData = post
    ? { ...post }
    : {
        title: "",
        content: "",
      };
  const [postData, setPostData] = useState(initialPostData);
  const characterLimit = 600;
  const [selectedImage, setSelectedImage] = useState("");
  const {
    userData: { username, profile_pic },
  } = useAuth();
  const { postsStateDispatch } = usePosts();
  const { showToast } = useToast();

  // const addImageInput
  const createNewPostHandler = () => {
    if (postData.title === "" || postData.content === "") {
      showToast({ title: "title and content cannot be empty", type: "error" });
    } else if (!post) {
      createPost({ postData, postsStateDispatch, showToast });
      setIsNewPostSectionVisible(false);
    } else {
      editPost({ postId: post._id, postData, postsStateDispatch, showToast });
      setShowEditPostModal(false);
    }
    setPostData(initialPostData);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "eko42n5k");
    console.log(selectedImage, formData);
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/bhtibrewal-cloud/image/upload",
        formData
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      className="section-overlay"
      onClick={() => {
        setIsNewPostSectionVisible(false);
      }}
    >
      <section
        className="new-post_section"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="new-post_flex">
          <div className="avatar avatar-s">
            <img
              src={profile_pic}
              className="user-img"
              alt={username}
              title={username}
            />
          </div>
          <div className="post_inputs">
            <input
              type="text"
              name="title"
              placeholder="Title..."
              className="new-post_title"
              value={postData.title}
              onChange={(e) =>
                setPostData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <textarea
              rows="10"
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
            {/* <FiImage className="icons" /> */}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            <button onClick={uploadImage}> Upload </button>
          </div>
          <p className="char-count">
            {characterLimit - postData.content.length}
          </p>
          <Button
            className={` ${
              postData.title === "" ||
              postData.content === "" ||
              postData.content.length > characterLimit
                ? "disabled-btn"
                : "btn-primary"
            }`}
            onClick={createNewPostHandler}
          >
            Post
          </Button>
        </div>
      </section>
    </div>
  );
};
