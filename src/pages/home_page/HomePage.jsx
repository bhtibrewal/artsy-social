import "./home_page.css";
import { useState, useEffect } from "react";
import { Loader, PostCard } from "../../components";
import { NewPostSection } from "./components/NewPostSection";
import { getPosts } from "../../services";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts({setPosts});
  }, []);

  if (posts?.length === 0) return <Loader />;
  return (
    <main className="main home-page_main">
      <NewPostSection />
      {posts.map((post) => {
        return <PostCard key={post._id} {...post} />;
      })}
    </main>
  );
};
