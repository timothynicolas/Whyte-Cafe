import { Routes, Route } from "react-router-dom";

import { LoadingScreen } from "./pages/loading/LoadingScreen";
import { Home } from "./pages/home/Home";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<LoadingScreen />} />
    </Routes>
  );
}

export default App;
