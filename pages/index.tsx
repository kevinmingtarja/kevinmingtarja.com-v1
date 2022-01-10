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
            I&apos;m an aspiring software engineer who loves designing and
            building systems and infrastructures. Currently, I&apos;m studying
            Computer Science @ National University of Singapore.
          </Text>
        </div>
        <Link className={styles.ctaButton} href="/about">
          <Button>More about me ✋</Button>
        </Link>
      </main>
    </div>
  )
}
