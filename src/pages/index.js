import Head from "next/head";
import styles from "../styles/Home.module.css";
import Calculator from "../components/Calculator";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Jiaqi Calculator</title>
        <meta name="description" content="Practice React framework a calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h2 className={styles.title}>Practice React with a Simple Calculator</h2>
        <Calculator />
      </main>
      
      <footer className={styles.footer}>
        Jiaqi's Calculator
      </footer>
    </div>
  )
}
