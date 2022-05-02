import "./home_page.css";
import { Loader, PostCard } from "../../components";
import { NewPostSection } from "./components/NewPostSection";

import { usePosts } from "../../contexts";

export const HomePage = () => {
  const { postsState } = usePosts();

  
  if (postsState?.length === 0) return <Loader />;
  return (
    <main className="main home-page_main">
      <NewPostSection />
      {postsState.map((post) => {
        return <PostCard key={post._id} {...post} />;
      })}
    </main>
  );
};
