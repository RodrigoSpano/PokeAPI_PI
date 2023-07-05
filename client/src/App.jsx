import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingPage/Landingpage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
