import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { arrivalStatusToText } from "src/types";
import Link from "next/link";
import { useGetUser } from "@/hooks";

const inter = Inter({ subsets: ["latin"] });

function StatusCard() {
  const user = useGetUser();
  if (!user) return <></>;
  const status = user.status
    ? `arriving to ${arrivalStatusToText[user.status]}`
    : "not registered.";
  return (
    <div className={styles.card}>
      <h2 className={inter.className}>Status: {status}</h2>
      {user.status && (
        <Link href={`/confirmation`} className={inter.className}>
          click here to change
        </Link>
      )}
    </div>
  );
}

function IntroductionCard() {
  const user = useGetUser();
  if (!user) return <></>;

  return (
    <div className={styles.card}>
      <h2 className={inter.className}>
        Hello, <span>{user.name}!</span>
      </h2>
      <br />
      <p className={inter.className}>Happy to see you.</p>
    </div>
  );
}

function PreferencesCard() {
  const user = useGetUser();
  if (!user) return <></>;

  return (
    <div className={styles.card}>
      <h2 className={inter.className}>
        <Link href={"/preferences"}>Preferences</Link>
      </h2>
    </div>
  );
}

function ArrivalInformation() {
  return (
    <>
      <div>
        <a
          href={
            "https://ul.waze.com/ul?place=ChIJ3YcwnuHQAhUR6vFKi8aJe8M&ll=31.80896600%2C35.10053200&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          }
        >
          <img
            style={{ height: "100px" }}
            alt={"Navigate with waze"}
            src={"/waze.png"}
          />
        </a>
      </div>
    </>
  );
}

function CenterImage() {
  return (
    <Image
      style={{ borderRadius: "50%" }}
      className={styles.logo}
      src="/sna.png"
      alt="S&A"
      width={180}
      height={180}
      priority
    />
  );
}

export default function Home() {
  const user = useGetUser();
  if (!user) return <div>no user</div>; // TODO: add fallback input
  return (
    <>
      <Head>
        <title>A&S Wedding confirmation</title>
        <meta name="description" content="Confirm your place at the wedding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <CenterImage />
        </div>

        <div className={styles.grid}>
          <IntroductionCard />
          <br />
          <StatusCard />
          <br />
          <PreferencesCard />
          <br />
          <ArrivalInformation />
        </div>
      </main>
    </>
  );
}
