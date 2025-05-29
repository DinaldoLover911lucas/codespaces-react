import styles from './MyTextList.module.css';
import { MyText } from './MyText';

export function MyTextList() {
    const texts = [
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    ];

    return (
        <div className={styles.container}>
            {texts.map((item, index) => (
                <MyText key={index} title={item.title}>
                    {item.text}
                </MyText>
            ))}
        </div>
    );
}