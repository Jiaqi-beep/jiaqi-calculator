import { useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Screen from "../components/Screen";
import ButtonBox from "../components/ButtonBox";

export default function Home() {

  const [num, setNum] = useState(
    {
      opt: "",
      ans: 0,
      tempAns: undefined
    });

  return (
    <div>
      <Head>
        <title>Jiaqi Calculator</title>
        <meta name="description" content="Practice React framework a calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.main}>
        <h2 className={styles.title}>Practice React with a Simple Calculator</h2>
        <Layout>
          <Screen num={num} />
          <ButtonBox num={num} setNum={setNum} />
        </Layout>
      </div>

      <footer className={styles.footer}>
        Jiaqi's Calculator
      </footer>
    </div>
  )
}
