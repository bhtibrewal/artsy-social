import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, FaRegUser, FiSettings } from "../../assets/icons";
const sidebar = [
  {
      id: 1,
    name: "Home",
    icon: <AiOutlineHome></AiOutlineHome>,
    route: "/",
  },
  {
    id: 2,
    name: "Profile",
    icon: <FaRegUser></FaRegUser>,
    route: "/user-profile",
  },
  {
    id: 3,
    name: "Settings",
    icon: <FiSettings></FiSettings>,
    route: "/user-profile",
  },
];
export const Sidebar = () => {
  return (
    <aside className={`aside  `}>
      {sidebar.map((item) => {
        const { route, name, icon, id } = item;
        return (
          <NavLink
            to={route}
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
