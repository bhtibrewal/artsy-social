import { Route, Routes, Outlet } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Sidebar, Header, RightSidebar, Toast } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./redux/reducers/postsSlice";
import { RequireAuth } from "utils/RequireAuth";
const SignUp = lazy(() => import("./pages/auth/sign_up/SignUp"));
const SinglePostPage = lazy(() =>
  import("./pages/single-post_page/SinglePostPage")
);
const UserProfile = lazy(() => import("./pages/user_profile/UserProfile"));
const HomePage = lazy(() => import("./pages/home_page/HomePage"));
const SignIn = lazy(() => import("./pages/auth/sign_in/SignIn"));
const Page404 = lazy(() => import("./pages/page_404/Page404"));

const WithSidebar = () => {
  return (
    <>
      <Sidebar />
      <RightSidebar />
      <Outlet />
    </>
  );
};
function App() {
  const { status } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(loadPosts());
    }
  }, [status]);

  return (
    <div className="body">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route element={<WithSidebar />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/user-profile/:username" element={<UserProfile />} />
              <Route path="/post/:postId" element={<SinglePostPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Page404 />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Suspense>
      <Toast position="bottom-right" />
    </div>
  );
}

export default App;
