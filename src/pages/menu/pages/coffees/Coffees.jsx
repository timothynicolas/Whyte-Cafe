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
      price: "110.00",
      tag: "New",
      image: cm,
    },
    {
      id: 2,
      name: "Brown Sugar Soymilk Iced Shaken Espresso",
      price: "110.00",
      tag: "Best-Seller",
      image: bsise,
    },
    {
      id: 3,
      name: "Vanilla Sweet Cream Cold Brew",
      price: "120.00",
      tag: "Favorite",
      image: vsccb,
    },
    {
      id: 4,
      name: "Creamy Matcha Latte",
      price: "130.00",
      tag: "Recommended",
      image: cml,
    },
    {
      id: 5,
      name: "White Chocolate Mocha",
      price: "110.00",
      tag: "Limited",
      image: wm,
    },
    {
      id: 6,
      name: "Americano",
      price: "110.00",
      tag: "Recommended",
      image: a,
    },
    {
      id: 7,
      name: "Capuccino",
      price: "110.00",
      tag: "Best-Seller",
      image: c,
    },
    {
      id: 8,
      name: "Caffe Latte",
      price: "110.00",
      tag: "Favorite",
      image: l,
    },
    {
      id: 9,
      name: "Caffe Mocha",
      price: "110.00",
      tag: "Best-Seller",
      image: m,
    },
    {
      id: 10,
      name: "Salted Caramel Cold Brew",
      price: "110.00",
      tag: "New",
      image: sccb,
    },
    
  ];
  return (
    <div className="container main-container">
      <Navbar />
      <MenuTemplate title="Coffee" products={coffees}/>
      <Footer />
    </div>
  );
}
