import { FaPlus } from "../../assets/icons";
import { useState } from "react";
import { NewPostSection } from "../create_new_post/NewPostSection";

export const FloatingNewPostButton = () => {
  const [isNewPostSectionVisible, setIsNewPostSectionVisible] = useState(false);
  return (
    <>
      {isNewPostSectionVisible && (
        <NewPostSection
          setIsNewPostSectionVisible={setIsNewPostSectionVisible}
        />
      )}
      <button
        title="create post"
        className="floating-button"
        onClick={() => setIsNewPostSectionVisible(true)}
      >
        <FaPlus />
      </button>
    </>
  );
};
