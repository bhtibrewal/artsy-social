import "./user_profile.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaRegUser } from "../../assets/icons";
import { useAuth } from "../../contexts";
import axios from "axios";

export const UserProfile = () => {
  const { username } = useParams();
  // console.log(userId);
  const getUser = async () => {
    try {
      const res = await axios.get(`/api/users/${username}`);
      console.log(res.data);
      // setUserData(res);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUser();
  }, [username]);

  const {
    userData: { followers, following },
  } = useAuth();

  return (
    <main>
      <section className="user-stats">
        <div className="stats-cards followers-card">
          <span className="stats-card-icon">
            <FaRegUser />
          </span>
          <span>Followers</span>
          <p className="body-l "> {followers.length}+ </p>
        </div>
        <div className="stats-cards following-card">
          <span className="stats-card-icon">
            <FaRegUser />
          </span>
          <span>Following</span>
          <p className="body-l"> {following.length}+ </p>
        </div>
        <div className="stats-cards posts-card">
          <span className="stats-card-icon">
            <FaRegUser />
          </span>
          <span>Posts</span>
          <p className="body-l"> 100 </p>
        </div>
      </section>
    </main>
  );
};
