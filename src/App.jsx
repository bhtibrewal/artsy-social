import { Route, Routes, Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Sidebar, Header, RightSidebar, Toast } from "./components";
import { HomePage, SignIn, SinglePostPage, UserProfile } from "./pages";
const WithSidebar = ({ displaySidebar }) => {
  return (
    <>
      {displaySidebar && <Sidebar />}
      <RightSidebar />
      <Outlet />
    </>
  );
};
function App() {
  const [displaySidebar, setDisplaySidebar] = useState(true);

  return (
    <div className="body">
      <Header setDisplaySidebar={setDisplaySidebar} />

      <Routes>
        <Route element={<WithSidebar displaySidebar={displaySidebar} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-profile/:username" element={<UserProfile />} />
        </Route>
        <Route path="/post/:postId" element={<SinglePostPage />} />

        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Toast position="bottom-right" />
    </div>
  );
}

export default App;
