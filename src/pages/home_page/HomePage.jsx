import "./home_page.css";
import { useState, useMemo } from "react";
import { FloatingNewPostButton, Loader, PostCard } from "../../components";
import { usePosts } from "../../contexts";
import { FaAngleDown } from "../../assets/icons";

export const HomePage = () => {
  const { postsState } = usePosts();
  const [sortBy, setSortBy] = useState("latest");
  const [showSortByDropdown, setShowSortByDropdown] = useState(false);

  // sort By latest first or oldest first
  const latestFirst = (a, b) => new Date(a.createdAt) - new Date(b.createdAt);
  const oldestFirst = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);
  const postsList = useMemo(() => {
    return [...postsState].sort(
      sortBy === "latest" ? latestFirst : oldestFirst
    );
  }, [sortBy, postsState]);

  if (postsState?.length === 0) return <Loader />;
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
