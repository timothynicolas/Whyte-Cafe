import { useState, useEffect } from "react";
import { Modal } from "../../../components/modal/Modal";

import styles from "./latest-creation.module.css";

import product1 from "../../../assets/sample-products/product4.png";
import product2 from "../../../assets/sample-products/product5.png";
import product3 from "../../../assets/sample-products/product6.png";
import product4 from "../../../assets/sample-products/product7.png";

import arrow from "../assets/arrow.svg";

export function LatestCreation() {
  const products = [
    {
      id: 1,
      name: "Caramel Macchiato",
      description:
        "A smooth blend of rich espresso and creamy steamed milk, finished with a drizzle of golden caramel. Sweet, bold, and perfectly balanced — a comforting pick-me-up any time of day.",
      price: "110.00",
      tag: "New",
      image: product1,
    },
    {
      id: 2,
      name: "Brown Sugar Soymilk Iced Shaken Espresso",
      description:
        "Bold espresso shaken with brown sugar syrup and poured over velvety soymilk for a naturally sweet, dairy-free kick. Refreshing, energizing, and impossible to put down.",
      price: "110.00",
      tag: "Best-Seller",
      image: product4,
    },
    {
      id: 3,
      name: "Vanilla Sweet Cream Cold Brew",
      description:
        "Slow-steeped cold brew topped with a silky pour of vanilla sweet cream that cascades through the coffee. Smooth, mellow, and subtly sweet — the definition of effortless cool.",
      price: "120.00",
      tag: "Favorite",
      image: product3,
    },
    {
      id: 4,
      name: "Creamy Matcha Latte",
      description:
        "Ceremonial-grade matcha whisked into steamed milk for a drink that's earthy, creamy, and gently sweet. A calm, focused energy in every sip — no jitters, just good vibes.",
      price: "130.00",
      tag: "Recommended",
      image: product2,
    },
  ];

  const tagStyles = {
    New: styles.new,
    "Best-Seller": styles.bestSeller,
    Favorite: styles.favorite,
    Limited: styles.limited,
    Recommended: styles.recommended,
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>
      <div className={styles.creationContainer}>
        <p className={styles.header}>Our Latest Creations</p>
        <p className={styles.subheader}>The newest blends, made just for you</p>
        <div className={styles.cardsContainer}>
          {products.map((product) => (
            <div
              className={styles.latestCreationCard}
              key={product.id}
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} />
              <div className={styles.productDetails}>
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productDesc}>{product.description}</p>
                <p className={styles.price}>{product.price}</p>
                <div className={`${styles.tag} ${styles.mobileTag}`}>New</div>
              </div>
              <div className={styles.tag}>New</div>
            </div>
          ))}
        </div>

        <button className={styles.viewMoreBtn}>
          View More <img src={arrow} />
        </button>
      </div>
      {selectedProduct && (
        <Modal
          selectedProduct={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          tagStyles={tagStyles}
        />
      )}
    </>
  );
}
