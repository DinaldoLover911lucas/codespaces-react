import styles from "./Product.module.css";
import { useState } from "react";

export function Product({ product, addToCart, removeFromCart }) {
  const [qty, setQty] = useState(0);

  const handleAdd = () => {
    setQty(qty + 1);
    addToCart(product);
  };

  const handleRemove = () => {
    if (qty > 0) {
      setQty(qty - 1);
      removeFromCart(product);
    }
  };

  return (
    <div className={styles.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.productDescription}>{product.description}</p>
      <div className={styles.productQty}>
        <p className={styles.productPrice}>
          {qty === 0
            ? `$${product.price}`
            : `$${(product.price * qty).toFixed(2)}`}
        </p>
        {qty > 0 && (
          <div className={styles.productQty}>
            <button onClick={handleRemove}>-</button>
            <p>{qty}</p>
            <button onClick={handleAdd}>+</button>
          </div>
        )}
      </div>
      {qty === 0 && (
        <button
          className={styles.productButton}
          onClick={handleAdd}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
}