import { useState } from "react";
import styles from "../styles/Calculator.module.scss";

export default function ButtonBox({setNum}) {

    function buttonClick(symbol) {
        
        setNum(symbol);
    }

    const buttonList = ["C", "+/-", "%", "÷", 7, 8,
        9, "x", 4, 5, 6, "-",
        1, 2, 3, "+", 0, ".", "="];

    return (
        <div className={styles.buttonsWrapper}>
            {buttonList.map((symbol) => {
                if (symbol === 0) {
                    return (
                        <div className={styles.zero}>
                            <button
                                className={styles.zeroButton}
                                key={symbol}
                                onClick={() => buttonClick(symbol)}>0
                            </button>
                        </div>
                    )
                } else if (typeof symbol === "number" && symbol !== 0) {
                    return (<button className={styles.numButton} key={symbol} onClick={() => buttonClick(symbol)}>{symbol}</button>)
                } else if (["C", "+/-", "%"].includes(symbol)) {
                    return (<button className={styles.funcButton} key={symbol} onClick={() => buttonClick(symbol)}>{symbol}</button>)
                } else {
                    return (<button className={styles.optButton} key={symbol} onClick={() => buttonClick(symbol)}>{symbol}</button>)
                }
            })}
        </div>
    )
}