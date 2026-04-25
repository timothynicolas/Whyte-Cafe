import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../components/modal/Modal";

import styles from "./menutemplate.module.css";

import backIcon from "./assets/backIcon.svg";
import searchIcon from "./assets/searchIcon.svg";

export function MenuTemplate({ title, products }) {
  const tags = [
    "All",
    "New",
    "Recommended",
    "Best-Seller",
    "Favorite",
    "Limited",
  ];

  const tagStyles = {
    New: styles.new,
    "Best-Seller": styles.bestSeller,
    Favorite: styles.favorite,
    Limited: styles.limited,
    Recommended: styles.recommended,
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products
    .filter((p) => activeTag === "All" || p.tag === activeTag)
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  useEffect(() => {
    if (selectedProduct) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [selectedProduct]);

  return (
    <>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>{title}</h1>
        <Link to="/menu" className={styles.backBtn}>
          <img src={backIcon} />
          Back to Menu
        </Link>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <img src={searchIcon} alt="search" />
          <input
            placeholder="Looking for something?"
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.tagContainer}>
          {tags.map((tag) => (
            <button
              key={tag}
              className={
                activeTag === tag ? styles.activeBtn : styles.inactiveBtn
              }
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <div
            className={styles.productCard}
            key={product.id}
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} />
            <div className={styles.productDetails}>
              <p className={styles.productName}>{product.name}</p>

              <p className={styles.price}>{product.price}</p>
            </div>
            <div className={`${styles.tag} ${tagStyles[product.tag]}`}>
              {product.tag}
            </div>
          </div>
        ))}
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
