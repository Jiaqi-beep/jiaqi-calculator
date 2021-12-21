import styles from "../styles/Calculator.module.scss";

export default function ({ children }) {
    return (
        <div className={styles.border}>{children}</div>
    )
}