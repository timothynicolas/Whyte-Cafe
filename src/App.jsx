import { Routes, Route } from "react-router-dom";

import { LoadingScreen } from "./pages/loading/LoadingScreen";
import { Home } from "./pages/home/Home";
import { Hero } from "./pages/hero/Hero";
import { Menu } from "./pages/menu/Menu";
import { Catering } from "./pages/catering/Catering";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/catering" element={<Catering />} />
    </Routes>
  );
}

export default App;
