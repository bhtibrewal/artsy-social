import "./header.css";
import { Link } from "react-router-dom";
import { FaRegUser, HiMenu } from "../../assets/icons";
import { useAuth } from "../../contexts";
import { LoggedInUserAvatar } from "./components/LoggedInUserAvatar";

export const Header = ({ setDisplaySidebar }) => {
  const { isUserLoggedIn } = useAuth();
  return (
    <header className="header">
      <button
        className="btn"
        onClick={() => setDisplaySidebar((prev) => !prev)}
      >
        <HiMenu />
      </button>

      <Link to="/">
        <p className="body-l"> Artsy Social</p>
      </Link>
      {isUserLoggedIn ? (
        <LoggedInUserAvatar />
      ) : (
        <Link to="/sign-in">
          <FaRegUser />
        </Link>
      )}
    </header>
  );
};
