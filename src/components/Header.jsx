import styles from "./Header.module.css";

export function Header({ cart }) {
  // Soma total de itens no carrinho
  const totalItems = cart.reduce((sum, product) => sum + (product.quantity || 1), 0);

  // Soma total do valor do carrinho
  const totalPrice = cart
    .reduce((total, product) => total + (product.price * (product.quantity || 1)), 0)
    .toFixed(2);

  return (
    <header className={styles.header}>
      <h1>TRJ Megastore</h1>
      <div>
        {cart.length > 0 && <p>{totalItems} produtos</p>}
        <p>
          Total $: {totalPrice}
        </p>
      </div>
    </header>
  );
}