import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Sidebar, Header, RightSidebar } from "./components";
import { HomePage, SignIn, UserProfile } from "./pages";

function App() {
  const [displaySidebar, setDisplaySidebar] = useState(true);
  return (
    <div className="body">
      <Header setDisplaySidebar={setDisplaySidebar} />
      {displaySidebar && <Sidebar />}
      <RightSidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path='/sign-in' element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
