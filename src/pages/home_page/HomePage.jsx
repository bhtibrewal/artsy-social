import "./home_page.css";
import { useState, useMemo, useEffect } from "react";
import { FloatingNewPostButton, Loader, PostCard } from "../../components";
import { FaAngleDown } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../redux/reducers/postsSlice";

export const HomePage = () => {
  const { status, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState("latest");
  const [showSortByDropdown, setShowSortByDropdown] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadPosts());
    }
  });
  // sort By latest first or oldest first
  const latestFirst = (a, b) => new Date(a.createdAt) - new Date(b.createdAt);
  const oldestFirst = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);

  const postsList = useMemo(() => {
    return [...posts].sort(
      sortBy === "latest" ? latestFirst : oldestFirst
    );
  }, [sortBy, posts]);

  if (posts?.length === 0) return <Loader />;
  return (
    <>
      <FloatingNewPostButton />
      <main className="main home-page_main">
        <section className="filters-section">
          <div className="sort-by">
            <button
              className="btn sort-by-btn"
              onClick={() => setShowSortByDropdown((prev) => !prev)}
            >
              <span>{sortBy}</span>
              <FaAngleDown />
            </button>
            {showSortByDropdown && (
              <div className="dropdown">
                <p onClick={() => setSortBy("latest")}>Latest</p>
                <p onClick={() => setSortBy("oldest")}>Oldest</p>
              </div>
            )}
          </div>
        </section>
        <section>
          {postsList.map((post) => {
            return <PostCard key={post._id} {...post} />;
          })}
        </section>
      </main>
    </>
  );
};
