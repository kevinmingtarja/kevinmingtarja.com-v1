import Head from "next/head"
import Image from "next/image"

import { Button, Heading, Link, Text } from "~/components/index"

import styles from "../../styles/Home.module.css"

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me</title>
        <meta
          content="I'm a second year student at NUS studying Computer Science at NUS"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <Heading level={1}>About me.</Heading>

          <Text className={styles.info}>
            Hello! I&apos;m a second year computer science undergraduate
            studying at the National University of Singapore. I enjoy building
            softwares and have experience in Frontend, Backend, Mobile
            development.
            <br />
            <br />
            Recently, I have a newfound love for designing and building
            technical infrastructures in the cloud which started when I was
            given a chance to design the architecture and build the
            infrastructure using Terraform and AWS for a web app I built on my
            most recent internship.
            <br />
            <br />
            {/* Here are some of the technologies I&apos;m proficient with: */}
          </Text>
        </div>
      </main>
    </div>
  )
}
