import styles from "./Product.module.css";
import { useState } from "react";

export function Product({ product, addToCart }) {
    const [qty, setQty] = useState(0);

    const handleIncrease = () => {
        setQty(qty + 1);
        if (qty === 0) {
            addToCart(product);
        }
    };

    const handleDecrease = () => {
        if (qty > 0) {
            setQty(qty - 1);
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
                <p className={styles.productPrice}>${product.price}</p>
                <div className={styles.productQty}>
                    <button onClick={handleDecrease}>-</button>
                    <p>{qty}</p>
                    <button onClick={handleIncrease}>+</button>
                </div>
            </div>
            <button
                className={styles.productButton}
                onClick={handleIncrease}
            >
                ADD TO CART
            </button>
        </div>
    );
}
