import { useState, useEffect } from "react";
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
        {users.map((user) => {
          return (
            <div key={user._id}>
              <div className="flex-align-center">
                <div className="avatar avatar-s">
                  <img src={user.profile_pic} alt="avatar" />
                </div>
                <p>
                  {user.firstName} {user.lastName}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </aside>
  );
};
