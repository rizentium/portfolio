import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>@rizentium</title>
        <meta name="description" content="Arif Hidayat Profile and Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <Image
            className={styles.logo}
            src="/languages.png"
            alt="Next.js Logo"
            width={250}
            height={40}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projects (Soon) <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              You can see all published projects in here.
            </p>
          </a>

          <a
            href="https://medium.com/@af.hidayat"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Articles <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              I write articles just for fun and share my experiences.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/arifhidayat95/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Linkedin <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              If you want to reach out with me, we can connect at Linkedin.
            </p>
          </a>

          <a
            href="https://github.com/rizentium"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Github <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              You can see all of open source contribution at Github.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
