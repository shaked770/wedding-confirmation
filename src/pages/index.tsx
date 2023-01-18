import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

enum Permissions {
  DEVELOPER = 1,
  ADMIN,
  GUEST,
}

enum ArrivalStatus {
  NOT_ARRIVING = 1,
  CEREMONY_ONLY,
  WHOLE,
  AFTER_PARTY,
}
const arrivalStatusToText = {
  [ArrivalStatus.NOT_ARRIVING]: "not arriving",
  [ArrivalStatus.CEREMONY_ONLY]: "the hupa only",
  [ArrivalStatus.WHOLE]: "the wedding!",
  [ArrivalStatus.AFTER_PARTY]: "arriving to the after party",
};

interface Person {
  username: string;
  permissions: Permissions[];
  arrivalStatus: ArrivalStatus;
}

const developer: Person = {
  username: "Shaked",
  permissions: [Permissions.DEVELOPER, Permissions.ADMIN],
  arrivalStatus: ArrivalStatus.WHOLE,
};

const admin: Person = {
  username: "Aviva",
  permissions: [Permissions.ADMIN],
  arrivalStatus: ArrivalStatus.WHOLE,
};

const guest: Person = {
  username: "Elad",
  permissions: [Permissions.GUEST],
  arrivalStatus: ArrivalStatus.WHOLE,
};

let user: Person = developer;

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
              Hello, <span>{user.username}!</span>
            </h2>
            <br />
            <p className={inter.className}>
              Welcome to the official Shaked and Aviva wedding arrival
              confirmation page.
            </p>
          </div>

          <a className={styles.card}>
            <h2 className={inter.className}>
              Right now, you are{" "}
              {user.arrivalStatus
                ? `arriving to ${arrivalStatusToText[user.arrivalStatus]}`
                : "not registered."}
            </h2>
            {user.arrivalStatus && (
              <p className={inter.className}>Do you need to change this?</p>
            )}
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
        {user.permissions.includes(Permissions.DEVELOPER) && (
          <div className={styles.description}>
            <p>Change Languages</p>
            <div>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Developer console</p>
              </a>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
