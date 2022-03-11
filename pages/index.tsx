import Head from "next/head"
import Image from "next/image"

import { Button, Heading, Link, Text } from "~/components/index"
import About from "~/components/Sections/About"
import Experience from "~/components/Sections/Experience"
import Hero from "~/components/Sections/Hero"
import Projects from "~/components/Sections/Projects"

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
        {/* <meta property="og:title" content="TITLE" /> */}
        <meta
          property="og:image"
          content="https://kevin-sandbox.s3.ap-southeast-1.amazonaws.com/thumbnail.png"
        />
        <meta property="og:url" content="https://www.kevinmingtarja.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}
