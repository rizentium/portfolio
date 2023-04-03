import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Projects.module.scss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <>
      <Head>
        <title>@rizentium | Projects</title>
        <meta name="description" content="rizentium's Projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} ${styles.projects}`}>
        <h1 className={`${styles.projects_title}`}>Projects</h1>
        <br />
        <br />
        <div className={`${styles.projects_body}`}>
          <Link
            href={"https://cekoto.com"}
            target="_blank"
            className={`${styles.projects_item}`}
          >
            <h3>Cekoto</h3>
            <Image
              src="https://cekoto.com/images/thumbnail.png"
              alt="Cekoto"
              width={256}
              height={256}
            />
            <p>Automotive Daily Apps</p>
          </Link>
          <Link
            href={"https://notulen.rizentium.com"}
            target="_blank"
            className={`${styles.projects_item}`}
          >
            <h3>Notulen</h3>
            <Image
              src={
                "https://notulen.rizentium.com/_next/image?url=%2Fthumbnail.png&w=640&q=75"
              }
              alt="Notulen"
              width={256}
              height={256}
            />
            <p>Keep all notes in a single place.</p>
          </Link>
        </div>
      </main>
    </>
  );
}
