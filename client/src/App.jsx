import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingPage/Landingpage";
import HomePage from "./pages/home/HomePage";
import NavbarContainer from "./components/navbar/NavbarContainer";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname === "/" ? null : <NavbarContainer />}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
