import { Link } from "react-router-dom";
import { useAuth, useToast } from "../../../contexts";
import { logOut } from "../../../services";

export const LoggedInUserAvatar = () => {
  const {userData:{profile_pic}, setIsUserLoggedIn, userDataDispatch } = useAuth();
  const { showToast } = useToast();

  return (
    <div className="user">
      <div className="avatar avatar-s">
        <img
          src={profile_pic}
          alt="avatar"
        />
      </div>
      <div className="user-dropdown flex-col">
        <Link to="/user-profile" className="flex-align-center">
          <span>My Account</span>
          <i className="fa-solid fa-angle-right"></i>
        </Link>
        <div className="flex-align-center">
          <span>My offers</span>
          <i className="fa-solid fa-angle-right"></i>
        </div>
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
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};
