import styles from "../styles/Calculator.module.scss";

export default function Screen({num}) {
    return (
        <div className={styles.screen}>
            {num.tempAns === undefined ? num.ans : num.tempAns}
        </div>
    )
}