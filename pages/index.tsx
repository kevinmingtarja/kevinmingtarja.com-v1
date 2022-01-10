import Head from "next/head"
import Image from "next/image"

import { Button, Heading, Link, Text } from "~/components/index"
import About from "~/components/Sections/About"
import Experience from "~/components/Sections/Experience"
import Hero from "~/components/Sections/Hero"

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
        <Hero />
        <About />
        <Experience />
      </main>
    </div>
  )
}
