import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, FaRegUser, FiSettings } from "../../assets/icons";
import { useAuth } from "../../contexts";

const sidebar = [
  {
    id: 1,
    name: "Home",
    icon: <AiOutlineHome />,
    route: "/",
  },
  {
    id: 2,
    name: "Profile",
    icon: <FaRegUser />,
    route: "/user-profile",
  },
  {
    id: 3,
    name: "Settings",
    icon: <FiSettings />,
    route: "/settings",
  },
];
export const Sidebar = () => {
  const {
    userData: { username },
  } = useAuth();
  return (
    <aside className={`aside `}>
      {sidebar.map((item) => {
        const { route, name, icon, id } = item;
        return (
          <NavLink
            to={route === "/user-profile" ? route + "/" + username : route}
            key={id}
            className={({ isActive }) =>
              isActive ? "aside-item active " : "aside-item"
            }
          >
            {icon}
            <span className="aside-text">{name}</span>
          </NavLink>
        );
      })}
    </aside>
  );
};
