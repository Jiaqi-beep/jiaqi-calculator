import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Screen from "../components/Screen";
import ButtonBox from "../components/ButtonBox";

export default function Home() {

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
          <Screen />
          <ButtonBox />
        </Layout>
      </div>

      <footer className={styles.footer}>
        Jiaqi's Calculator
      </footer>
    </div>
  )
}
