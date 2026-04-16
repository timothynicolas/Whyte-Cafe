import { Routes, Route } from "react-router-dom";

import { LoadingScreen } from "./pages/loading/LoadingScreen";
import { Home } from "./pages/home/Home";
import { Hero } from "./pages/hero/Hero";
import { Menu } from "./pages/menu/Menu";
import { Catering } from "./pages/catering/Catering";

{ /* BEVERAGE PAGES*/ }

import { Coffees } from "./pages/menu/pages/coffees/Coffees";
import { NonCoffees } from "./pages/menu/pages/non-coffees/NonCoffees";
import { Refreshers } from "./pages/menu/pages/refreshers/Refreshers";
import { Teas } from "./pages/menu/pages/teas/Teas";

{ /* FOOD PAGES*/ }

import { Starters } from "./pages/menu/pages/starters/Starters";
import { Waffles } from "./pages/menu/pages/waffles/Waffles";
import { Sandwiches } from "./pages/menu/pages/sandwiches/Sandwiches";
import { Pastas } from "./pages/menu/pages/pastas/Pastas";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/catering" element={<Catering />} />
      {/* BEVERAGE PAGES */}
      <Route path="/menu/coffees" element={<Coffees />} />
      <Route path="/menu/non-coffees" element={<NonCoffees />} />
      <Route path="/menu/refreshers" element={<Refreshers />} />
      <Route path="/menu/teas" element={<Teas />} />
      {/* FOOD PAGES */}
      <Route path="/menu/starters" element={<Starters />} />
      <Route path="/menu/waffles" element={<Waffles />} />
      <Route path="/menu/sandwiches" element={<Sandwiches />} />
      <Route path="/menu/pastas" element={<Pastas />} />

    </Routes>
  );
}

export default App;
