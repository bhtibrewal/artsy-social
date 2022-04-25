import './home_page.css'
import { PostCard } from "../../components";
import { NewPostSection } from "./components/NewPostSection";

export const HomePage = () => {
  return (
    <main className="main home-page_main">
      <NewPostSection/>
      <PostCard />
      <PostCard />
    </main>
  );
};
