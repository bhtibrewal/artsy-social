import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../services";
import "./right_sidebar.css";
export const RightSidebar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers({ setUsers });
  }, []);

  return (
    <aside className="right-sidebar">
      <section className="sidebar-section">
        <p>
          <strong>People You may know</strong>
        </p>
        <div>
          {users.map((user) => {
            return (
              <Link
                to={`/user-profile/${user.username}`}
                key={user._id}
                className="flex-align-center suggested-user"
              >
                <div className="avatar avatar-s">
                  <img src={user.profile_pic} alt="avatar" />
                </div>
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </aside>
  );
};
