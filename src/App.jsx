import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar, Header, RightSidebar } from "./components";
import { HomePage, UserProfile } from "./pages";

function App() {
  return (
    <div className="body">
      <Header />
      <Sidebar />
      <RightSidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
