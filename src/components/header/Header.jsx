import "./header.css";
import { Link } from "react-router-dom";
import { FaRegUser, HiMenu } from "../../assets/icons";
import { useAuth } from "../../contexts";
import { LoggedInUserAvatar } from "./components/LoggedInUserAvatar";
import { Search } from "./components/Search";

export const Header = ({ setDisplaySidebar }) => {
  const { isUserLoggedIn } = useAuth();
  return (
    <header className="header">

      <Link to="/">
        <p className="body-l"> Artsy Social</p>
      </Link>

      <Search />

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
