import "./home_page.css";
import { useState, useMemo } from "react";
import { FloatingNewPostButton, Loader, PostCard } from "../../components";
import { FaAngleDown } from "../../assets/icons";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const { status, posts } = useSelector((state) => state.posts);

  const [sortBy, setSortBy] = useState("latest");
  const [showSortByDropdown, setShowSortByDropdown] = useState(false);

  // sort By latest first or oldest first
  const latestFirst = (a, b) => new Date(a.createdAt) - new Date(b.createdAt);
  const oldestFirst = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);

  const postsList = useMemo(() => {
    return [...posts].sort(sortBy === "latest" ? latestFirst : oldestFirst);
  }, [sortBy, posts]);

  if (status === "loading") return <Loader />;
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
