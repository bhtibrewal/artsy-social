import "./likedby_modal.css";
import { UserSection } from "../user_section/UserSection";

export const LikedByModal = ({ likedBy, setIsLikedByModalVisible }) => {
  return (
    <div
      className="section-overlay center"
      onClick={() => setIsLikedByModalVisible(false)}
    >
      <section className="likedby_modal" onClick={(e) => e.stopPropagation()}>
        {likedBy.map(({ _id, firstName, lastName, profile_pic, username }) => {
          return (
            <UserSection key={_id}
              user={{ firstName, lastName, profile_pic, username }}
            />
          );
        })}
      </section>
    </div>
  );
};
