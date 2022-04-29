import { FaRegSmile, MdGif, FiImage } from "../../../assets/icons";
import { Button } from "../../../components";

export const NewPostSection = () => {
  return (
    <section className="new-post_section">
      <div>
        <textarea
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

        <Button className="btn-primary">Post</Button>
      </div>
    </section>
  );
};
