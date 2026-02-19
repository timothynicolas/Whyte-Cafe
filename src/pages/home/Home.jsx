import { Navbar } from "../../components/Navbar";
import { Hero } from "./Hero";

export function Home() {
  return (
    <div className="px-8 py-4 sm:px-16 md:px-20 xl:px-25 2xl:px-30 flex flex-col ">
      <Navbar />
      {/* <Hero /> */}
    </div>
  );
}
