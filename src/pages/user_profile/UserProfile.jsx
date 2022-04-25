import "./user_profile.css";
import { FaRegUser } from "../../assets/icons";

export const UserProfile = () => {
  return (
    <main>
      <section className="user-stats">
        <div className="stats-cards followers-card">
          <span className="stats-card-icon">
            <FaRegUser />
          </span>
          <span>Followers</span>
          <p className="body-l primary"> 2000+ </p>
        </div>
        <div className="stats-cards following-card">
          <span className="stats-card-icon">
            <FaRegUser />
          </span>
          <span>Following</span>
          <p className="body-l primary"> 2000+ </p>
        </div>
        <div className="stats-cards posts-card">
          <span className="stats-card-icon">
            <FaRegUser />
          </span>
          <span>Posts</span>
          <p className="body-l primary"> 100 </p>
        </div>
      </section>
    </main>
  );
};
