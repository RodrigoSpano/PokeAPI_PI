import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingPage/Landingpage";
import HomePage from "./pages/home/HomePage";
import NavbarContainer from "./components/navbar/NavbarContainer";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
