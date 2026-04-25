// import styles from "./coffees.module.css";

import { Navbar } from "../../../../components/navbar/Navbar";
import { Footer } from "../../../../components/footer/Footer";
import { MenuTemplate } from "../../MenuTemplate";

import cm from "../../assets/coffees/cm.png";
import bsise from "../../assets/coffees/bsise.png";
import a from "../../assets/coffees/a.png";
import c from "../../assets/coffees/c.png";
import cml from "../../assets/coffees/cml.png";
import l from "../../assets/coffees/l.png";
import m from "../../assets/coffees/m.png";
import sccb from "../../assets/coffees/sccb.png";
import vsccb from "../../assets/coffees/vsccb.png";
import wm from "../../assets/coffees/wm.png";

export function Coffees() {
  const coffees = [
    {
      id: 1,
      name: "Caramel Macchiato",
      description:
        "A smooth blend of rich espresso and creamy steamed milk, finished with a drizzle of golden caramel. Sweet, bold, and perfectly balanced — a comforting pick-me-up any time of day.",
      price: "110.00",
      tag: "New",
      image: cm,
    },
    {
      id: 2,
      name: "Brown Sugar Soymilk Iced Shaken Espresso",
      description:
        "Bold espresso shaken with brown sugar syrup and poured over velvety soymilk for a naturally sweet, dairy-free kick. Refreshing, energizing, and impossible to put down.",
      price: "110.00",
      tag: "Best-Seller",
      image: bsise,
    },
    {
      id: 3,
      name: "Vanilla Sweet Cream Cold Brew",
      description:
        "Slow-steeped cold brew topped with a silky pour of vanilla sweet cream that cascades through the coffee. Smooth, mellow, and subtly sweet — the definition of effortless cool.",
      price: "120.00",
      tag: "Favorite",
      image: vsccb,
    },
    {
      id: 4,
      name: "Creamy Matcha Latte",
      description:
        "Ceremonial-grade matcha whisked into steamed milk for a drink that's earthy, creamy, and gently sweet. A calm, focused energy in every sip — no jitters, just good vibes.",
      price: "130.00",
      tag: "Recommended",
      image: cml,
    },
    {
      id: 5,
      name: "White Chocolate Mocha",
      description:
        "Espresso meets velvety white chocolate sauce and steamed milk in this indulgent café classic. Rich, sweet, and impossibly smooth — a treat dressed up as a coffee.",
      price: "110.00",
      tag: "Limited",
      image: wm,
    },
    {
      id: 6,
      name: "Americano",
      description:
        "Shots of bold espresso diluted with hot water to bring out a deep, complex flavor with a lighter body. Clean, straightforward, and honest — for those who let the coffee speak for itself.",
      price: "110.00",
      tag: "Recommended",
      image: a,
    },
    {
      id: 7,
      name: "Cappuccino",
      description:
        "Equal parts espresso, steamed milk, and thick velvety foam — the holy trinity of Italian coffee culture. Bold at the base, airy on top, and perfectly proportioned in every cup.",
      price: "110.00",
      tag: "Best-Seller",
      image: c,
    },
    {
      id: 8,
      name: "Caffe Latte",
      description:
        "Shots of smooth espresso stretched with generous steamed milk and finished with a thin layer of microfoam. Mild, milky, and endlessly comforting — the everyday coffee done right.",
      price: "110.00",
      tag: "Favorite",
      image: l,
    },
    {
      id: 9,
      name: "Caffe Mocha",
      description:
        "A love letter to coffee and chocolate — rich espresso blended with dark mocha sauce and topped with steamed milk. Indulgent enough to feel like dessert, strong enough to keep you going.",
      price: "110.00",
      tag: "Best-Seller",
      image: m,
    },
    {
      id: 10,
      name: "Salted Caramel Cold Brew",
      description:
        "Smooth cold brew sweetened with buttery caramel and finished with a pinch of sea salt for a sweet-savory contrast. Bold, chilled, and dangerously easy to drink.",
      price: "110.00",
      tag: "New",
      image: sccb,
    },
  ];
  return (
    <div className="container main-container">
      <Navbar />
      <MenuTemplate title="Coffee" products={coffees} />
      <Footer />
    </div>
  );
}
