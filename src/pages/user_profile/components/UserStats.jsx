import { FaRegUser } from "../../../assets/icons";

export const UserStats = ({followingCount, followersCount }) => {
  return (
    <section className="user-stats">
      <div className="stats-cards followers-card">
        <span className="stats-card-icon">
          <FaRegUser />
        </span>
        <span>Followers</span>
        <p className="body-l "> {followersCount}+ </p>
      </div>
      <div className="stats-cards following-card">
        <span className="stats-card-icon">
          <FaRegUser />
        </span>
        <span>Following</span>
        <p className="body-l"> {followingCount}+ </p>
      </div>
      <div className="stats-cards posts-card">
        <span className="stats-card-icon">
          <FaRegUser />
        </span>
        <span>Posts</span>
        <p className="body-l"> 100 </p>
      </div>
    </section>
  );
};
