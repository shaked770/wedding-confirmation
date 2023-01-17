import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const temp = {
  name: "Aviva",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>A&S Wedding confirmation</title>
        <meta name="description" content="Save the date!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Change Languages</p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Shaked&apos;s stuff</p>
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            style={{ borderRadius: "50%" }}
            className={styles.logo}
            src="/sna.png"
            alt="S&A"
            width={180}
            height={180}
            priority
          />
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={inter.className}>
              Hello, <span>(Guest name)!</span>
            </h2>
            <br />
            <p className={inter.className}>
              Welcome to the official Shaked and Aviva wedding arrival
              confirmation page.
            </p>
          </div>

          <a className={styles.card}>
            <h2 className={inter.className}>
              Here will be Arrival confirmation.
            </h2>
            <p className={inter.className}>
              Four options: Not arriving, ceremony only, Everything, After party
              only
            </p>
          </a>

          <a className={styles.card}>
            <h2 className={inter.className}>
              You are arriving to (the guests choice!)
            </h2>
            <p className={inter.className}>
              hour, place, waze link, whole thing
            </p>
          </a>

          <a className={styles.card}>
            <h2 className={inter.className}>Change your mind?</h2>
            <p className={inter.className}>
              Here the user can change his selection.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
