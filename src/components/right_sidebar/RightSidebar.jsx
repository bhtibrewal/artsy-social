import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../services";
import { useToast } from "../../contexts";

import "./right_sidebar.css";
export const RightSidebar = () => {
  const [users, setUsers] = useState([]);
  
    const {showToast} = useToast();

  useEffect(() => {
    getUsers({ setUsers, showToast });
  }, []);

  return (
    <aside className="right-sidebar">
      <section className="sidebar-section">
        <p>
          <strong>People You may know</strong>
        </p>
        <div>
          {users.map((user) => {
            const {username, name , _id, profile_pic} = user;
            return (
              <Link
                to={`/user-profile/${username}`}
                key={_id}
                className="flex-align-center suggested-user"
              >
                <div className="avatar avatar-s">
                  <img src={profile_pic} alt="avatar" />
                </div>
                <span>
                  {name} 
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </aside>
  );
};
