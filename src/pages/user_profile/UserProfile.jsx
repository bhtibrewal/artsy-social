import "./user_profile.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegUser } from "../../assets/icons";
import { useAuth } from "../../contexts";
import axios from "axios";

export const UserProfile = () => {
  const { username } = useParams();
  const [userToShow, setUserToShow] = useState({});
  const { firstName, lastName, followers=[], following=[] } = userToShow;
  const getUser = async ({ username, setUserToShow }) => {
    try {
      const res = await axios.get(`/api/users/${username}`);
      setUserToShow(res.data.user);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getUser({ username, setUserToShow });
  }, [username]);

  const { userData } = useAuth();

  return (
    <main>
      <section>
        <p>
          {firstName}{" "} 
          {lastName}
        </p>
      </section>
      <section className="user-stats">
        <div className="stats-cards followers-card">
          <span className="stats-card-icon">
            <FaRegUser />
          </span>
          <span>Followers</span>
          <p className="body-l "> {followers?.length}+ </p>
        </div>
        <div className="stats-cards following-card">
          <span className="stats-card-icon">
            <FaRegUser />
          </span>
          <span>Following</span>
          <p className="body-l"> {following?.length}+ </p>
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
