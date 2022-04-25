import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <p className="body-l"> Artsy Social</p>
      <div className="avatar avatar-s">
        <img
          src="https://media.istockphoto.com/vectors/man-artist-painting-autumn-tree-landscape-in-the-park-isolated-vector-vector-id1058684612?k=20&m=1058684612&s=612x612&w=0&h=edHBtI190lKLq_a0YbCWSliJ_FyHsPcysvOZ6fK_Ap0="
          alt="avatar"
        />
      </div>
    </header>
  );
};
