import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LW Next Sandbox</title>
        <meta name="description" content="A Next.js sandbox by Laurel Wright" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-blue-500">LW Next Sandbox</h1>
        <p>
          This is a space where I will test out Next.js components before adding
          them to work projects.
        </p>
      </main>
    </div>
  );
}
