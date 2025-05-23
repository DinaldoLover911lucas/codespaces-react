
import styles from "./MyText.module.css";

export function MyText({ title, children, texts }) {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{children}</p>
        <p className={styles.text}>{texts}</p>
      </div>
    </div>
  );
}
