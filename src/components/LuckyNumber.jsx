import { useState } from 'react';
import styles from './LuckyNumber.Module.css';

export function LuckyNumber() {
const [LuckyNumber, setLuckyNumber] = useState(0);

function handleClick() {
    setLuckyNumber(Math.floor(Math.random() * 40)+ 1);
}


    return (
        <div className={styles.container}>
            <h1>Lucky Number 🎲</h1>
            <h1>Lucky Number = {LuckyNumber}</h1>
            <button className={styles.button} onClick={handleClick}>im feeling lucky</button>
            </div>

        );
}