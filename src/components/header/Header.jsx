import "./header.css";
import { Link } from "react-router-dom";
import { HiMenu } from "../../assets/icons";

export const Header = ({ setDisplaySidebar }) => {
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
      <div className="avatar avatar-s">
        <img
          src="https://media.istockphoto.com/vectors/man-artist-painting-autumn-tree-landscape-in-the-park-isolated-vector-vector-id1058684612?k=20&m=1058684612&s=612x612&w=0&h=edHBtI190lKLq_a0YbCWSliJ_FyHsPcysvOZ6fK_Ap0="
          alt="avatar"
        />
      </div>
    </header>
  );
};
