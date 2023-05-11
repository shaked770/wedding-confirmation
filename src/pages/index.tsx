import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { getUser } from "@/pages/api/userService";
import { arrivalStatusToText, Person } from "src/types";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function Status({ user }: { user: Person }) {
  const status = user.arrivalStatus
    ? `arriving to ${arrivalStatusToText[user.arrivalStatus]}`
    : "not registered.";
  return (
    <a className={styles.card}>
      <h2 className={inter.className}>Right now, you are {status}</h2>
      {user.arrivalStatus && (
        <Link
          href={`/confirmation?userId=${user.id}`}
          className={inter.className}
        >
          Do you need to change this?
        </Link>
      )}
    </a>
  );
}

function Introduction({ user }: { user: Person }) {
  return (
    <div className={styles.card}>
      <h2 className={inter.className}>
        Hello, <span>{user.username}!</span>
      </h2>
      <br />
      <p className={inter.className}>
        Welcome to the official Shaked and Aviva wedding arrival confirmation
        page.
      </p>
    </div>
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
  const router = useRouter();
  const { userId } = router.query;
  const user = getUser((userId as string) ?? "1"); // TODO: add fallback for nonexistant id or wrong id
  if (!user) return <></>;
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
          <Introduction user={user} />
          <br />
          <Status user={user} />
        </div>
      </main>
    </>
  );
}
