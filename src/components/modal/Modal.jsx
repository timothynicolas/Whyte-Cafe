import styles from "./modal.module.css";

export function Modal({ selectedProduct, onClose, tagStyles }) {
  if (!selectedProduct) return null;
  return (
    <div
      className={`${styles.modalOverlay}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={`${styles.tag} ${tagStyles[selectedProduct.tag]}`}>
          {selectedProduct.tag}
        </div>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
        <p className={styles.productName}>{selectedProduct.name}</p>
        <p className={styles.price}>{selectedProduct.price}</p>
        <p className={styles.description}>{selectedProduct.description}</p>
        <button
          className={styles.closeBtn}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
