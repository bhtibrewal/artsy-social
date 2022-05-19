import { Route, Routes, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { Sidebar, Header, RightSidebar, Toast } from "./components";
import {
  HomePage,
  Page404,
  SignIn,
  SignUp, 
  SinglePostPage,
  UserProfile,
} from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./redux/reducers/postsSlice";
import { RequireAuth } from "./utils/RequireAuth";

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
        <Route path ="/sign-up" element={<SignUp />} />
      </Routes>
      <Toast position="bottom-right" />
    </div>
  );
}

export default App;
