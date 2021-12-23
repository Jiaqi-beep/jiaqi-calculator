
import styles from "../styles/Calculator.module.scss";

export default function ButtonBox({ num, setNum }) {

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
            setNum({...num, tempAns: symbol, opt: ""});
        }else if (num.decimals > 0) {
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
            console.log(num);
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
                                onClick={() => setNumberClick(symbol)}>0
                            </button>
                        </div>
                    )
                } else if (typeof symbol === "number" && symbol !== 0) {
                    return (
                        <button
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
                            key={symbol}
                            onClick={() => setOptClick(symbol)}>{symbol}
                        </button>)
                }
            })}
        </div>
    )
}