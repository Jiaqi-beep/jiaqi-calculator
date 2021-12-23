
import { useEffect, useState } from "react";
import styles from "../styles/Calculator.module.scss";

export default function ButtonBox({ num, setNum }) {

    function getRandomColor() {
        const colors = ["#E6E047", "#4682B4", "#3C4AE6", "#7125E6", "#E0B660"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const [buttonColor, setButtonColor] = useState(getRandomColor());

    useEffect(() => {
        setButtonColor(getRandomColor());
    }, [num])

    function resetCalc() {
        setNum({
            ...num,
            opt: "",
            ans: 0,
            tempAns: undefined,
            decimals: 0
        })
    }

    function setNumberClick(symbol) {
        if (num.opt === "=") {
            setNum({ ...num, tempAns: symbol, opt: "" });
        } else if (num.decimals > 0) {
            setNum({
                ...num,
                tempAns: num.tempAns === undefined
                    ? symbol * 0.1 : Math.pow(10, -1 * num.decimals) * symbol + num.tempAns,
                decimals: ++num.decimals
            });
        } else {
            setNum({
                ...num,
                tempAns: num.tempAns === undefined
                    ? symbol : num.tempAns * 10 + symbol
            });
        }
    }

    function processOpt() {
        const tempAns = num.opt === "+"
            ? num.tempAns + num.ans : num.opt === "-"
                ? num.ans - num.tempAns : num.opt === "÷"
                    ? num.ans / num.tempAns : num.opt === "x"
                        ? num.ans * num.tempAns : num.tempAns;
        return tempAns;
    }

    function setOptClick(symbol) {
        if (symbol === ".") {
            setNum({ ...num, decimals: ++num.decimals });
        } else if (symbol === "=") {
            const temp = num.tempAns === undefined
                ? num.ans : num.opt === ""
                    ? num.tempAns : processOpt();
            setNum({
                ...num, opt: "=", tempAns: temp, decimals: 0
            });
        } else { // -, +, /, *
            setNum({
                ...num,
                ans: num.tempAns === undefined ? num.ans : processOpt(),
                opt: symbol,
                tempAns: undefined,
                decimals: 0
            });
        }
    }

    function setFuncClick(symbol) {
        if (symbol === "C") {
            resetCalc();
        } else if (symbol === "%") {
            setNum({ ...num, tempAns: num.tempAns === undefined ? undefined : num.tempAns / 100 });
        } else {
            setNum({ ...num, tempAns: num.tempAns === undefined ? undefined : num.tempAns * -1 })
        }
    }

    const handleNewOption = (e) => {
        //on enter in search bar
        if (e.key === "Enter") {
            const res = addNewOption(e.target.value);
            if (res) {
                e.target.value = "";
                //setValue("");
            }
        }
    };

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
                                style={{ "background-color": buttonColor }}
                                key={symbol}
                                onClick={() => setNumberClick(symbol)}>0
                            </button>
                        </div>
                    )
                } else if (typeof symbol === "number" && symbol !== 0) {
                    return (
                        <button
                            style={{ "background-color": buttonColor }}
                            className={styles.numButton}
                            key={symbol}
                            onClick={() => setNumberClick(symbol)}>{symbol}
                        </button>)
                } else if (["C", "+/-", "%"].includes(symbol)) {
                    return (
                        <button
                            className={styles.funcButton}
                            key={symbol}
                            onClick={() => setFuncClick(symbol)}>{symbol}
                        </button>)
                } else {
                    return (
                        <button
                            className={styles.optButton}
                            type="button"
                            key={symbol}
                            onClick={() => setOptClick(symbol)}>{symbol}
                        </button>
                    )
                }
            })}
        </div>
    )
}