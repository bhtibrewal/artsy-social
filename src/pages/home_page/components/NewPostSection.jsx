import { FaRegSmile } from "../../../assets/icons";
import { ButtonPrimary } from "../../../components";
export const NewPostSection = () => {
  return (
    <section className="new-post_section">
      <div>
        <textarea className="new-post_textarea" placeholder="What's on your mind?..."/>
      </div>
      <div className="flex-align-center">
        <FaRegSmile />
        <ButtonPrimary>Post</ButtonPrimary>
      </div>
    </section>
  );
};
