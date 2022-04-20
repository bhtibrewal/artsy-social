import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar, Header } from "./components";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="body">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
