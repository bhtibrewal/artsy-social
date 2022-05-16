import { Route, Routes, Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Sidebar, Header, RightSidebar, Toast } from "./components";
import {
  HomePage,
  Page404,
  SignIn,
  SinglePostPage,
  UserProfile,
} from "./pages";
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
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route element={<WithSidebar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-profile/:username" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<Page404 />} />
        <Route path="/post/:postId" element={<SinglePostPage />} />

        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Toast position="bottom-right" />
    </div>
  );
}

export default App;
