import "./home_page.css";
import { FloatingNewPostButton, Loader, PostCard } from "../../components";
import { usePosts } from "../../contexts";

export const HomePage = () => {
  const { postsState } = usePosts();
  // const {showToast} = useToast();

  // if (postsState?.length === 0) return <Loader />;
  return (
    <>
    <FloatingNewPostButton />
    <main className="main home-page_main">
      {postsState.map((post) => {
        return <PostCard key={post._id} {...post} />;
      })}
    </main>
    </>
  );
};
