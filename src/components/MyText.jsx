import styles from './MyText.module.css';



export function MyText({ text }) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.text}>{text}</h1>
        <p className={styles.text}> sit amet consectetur adipisicing elit. Modi itaque labore non ea, error illum eveniet est a omnis aliquam, quia delectus consequuntur praesentium laboriosam sed, ab quam expedita aliquid.
        </p>
        <h1>{text}</h1>
        <p>rem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque labore non ea, error illum eveniet est a omnis aliquam, quia delectus consequuntur praesentium laboriosam sed, ab quam expedita aliquid.
        </p>
      </div>
    </div>
  )

}
  

