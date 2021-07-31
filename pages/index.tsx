import Head from "next/head"
import Image from "next/image"

import { Button, Heading, Link, Text } from "~/components/index"

import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Mingtarja</title>
        <meta
          content="I'm a second year student at NUS studying Computer Science at NUS"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <Text className={styles.introText}>Hey there! My name is</Text>
          <Heading level={1}>Kevin Mingtarja.</Heading>

          <Heading className={styles.subheading} level={1}>
            I like to build softwares.
          </Heading>

          <Text className={styles.info}>
            {
              "I'm a second year computer science student studying at the National University of Singapore. I enjoy building softwares and have experience in Frontend, Backend, and Mobile development."
            }
          </Text>
        </div>
        <Link className={styles.ctaButton} href="/about">
          <Button>More about me ✋</Button>
        </Link>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a className={styles.card} href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a className={styles.card} href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            className={styles.card}
            href="https://github.com/vercel/next.js/tree/master/examples"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            className={styles.card}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </div>
  )
}
