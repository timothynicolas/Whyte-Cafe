import { Navbar } from "../../components/Navbar";
import { Hero } from "./Hero";

export function Home() {
  return (
    <div className="px-9 py-4">
      <Navbar />
      <Hero />
    </div>
    
  );
}
