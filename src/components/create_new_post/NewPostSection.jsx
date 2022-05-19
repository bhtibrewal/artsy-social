import axios from "axios";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { FaRegSmile, MdGif, FiImage } from "../../assets/icons";
import { Button } from "../../components";
import { useToast, useAuth } from "../../contexts";
import { createPost, editPost } from "../../services";
import { updatePosts } from "../../redux/reducers/postsSlice";

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
        image: "",
      };
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState(initialPostData);
  const characterLimit = 600;
  const [selectedImage, setSelectedImage] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const {
    userData: { username, profile_pic },
  } = useAuth();

  const dispatch = useDispatch();
  const { showToast } = useToast();

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadImage = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "eko42n5k");
    delete axios.defaults.headers.common["authorization"];

    fetch("https://api.cloudinary.com/v1_1/bhtibrewal-cloud/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setPostData((prev) => ({ ...prev, image: res?.secure_url }));
        showToast({ title: "Image Uploaded", type: "success" });
      })
      .catch((err) => console.log(err));

    axios.defaults.headers.common["authorization"] =
      localStorage.getItem("token");
  };
  const createNewPostHandler = () => {
    if (postData.title === "" || postData.content === "") {
      console.log(postData);
      showToast({ title: "title and content cannot be empty", type: "error" });
    } else if (!post) {
      createPost({ postData, dispatch, updatePosts, showToast });
      setIsNewPostSectionVisible(false);
    } else {
      editPost({
        postId: post._id,
        postData,
        dispatch,
        updatePosts,
        showToast,
      });
      setShowEditPostModal(false);
    }
    setPostData(initialPostData);
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
          <img
            style={{ width: "40%", alignSelf: "center", maxHeight: "30rem" }}
            src={
              previewSource ||
              postData?.image ||
              "https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg"
            }
            alt={"upload"}
          />
        </div>
        <div className="new-post_actions ">
          <div className=" flex-align-center">
            <FaRegSmile className="icons emoji-icon" />
            <MdGif className="icons gif-icon" />
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,"
              onChange={handleInputChange}
            />
            <Button className="outline-btn-primary" onClick={uploadImage}>
              {loading ? "Uploading..." : "Upload"}
            </Button>
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
