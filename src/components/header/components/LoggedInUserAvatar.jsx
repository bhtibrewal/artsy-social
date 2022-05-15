import { Link } from "react-router-dom";
import { useAuth, useToast } from "../../../contexts";
import { logOut } from "../../../services";
import { FaAngleRight } from "../../../assets/icons";

export const LoggedInUserAvatar = () => {
  const {
    userData: { profile_pic, username },
    setIsUserLoggedIn,
    userDataDispatch,
  } = useAuth();
  const { showToast } = useToast();

  return (
    <div className="user">
      <div className="avatar avatar-s">
        <img src={profile_pic} alt="avatar" />
      </div>
      <div className="user-dropdown flex-col">
        <Link to={`/user-profile/${username}`} className="flex-align-center">
          <span>My Account</span>
          <FaAngleRight />
        </Link>

        <div
          className="flex-align-center"
          onClick={() =>
            logOut({
              setIsUserLoggedIn,
              userDataDispatch,
              showToast,
            })
          }
        >
          <span>Logout</span>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};
