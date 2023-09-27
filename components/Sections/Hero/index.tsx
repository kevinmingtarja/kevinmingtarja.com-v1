import link from "next/link"

import useWindowDimensions from "~/hooks/useWindowDimensions"

import { Heading, Link, Text } from "~/components/index"

import styles from "./Hero.module.css"

const Hero = () => {
  const { width } = useWindowDimensions()

  return (
    <section className={styles.heroSection} id="hero">
      <Text className={styles.introText}>Hey there! My name is</Text>
      <Heading level={1}>Kevin Mingtarja.</Heading>
      <Heading className={styles.subheading} level={1}>
        I like to build softwares.
      </Heading>
      <Text className={styles.info}>
        I&apos;m an aspiring software engineer who loves designing and building
        systems and infrastructures. I spent the last year in the Bay Area,
        building graph databases and a fully managed Database-as-a-Service at{" "}
        <div className={styles.link}>
          <Link href="https://dgraph.io/">Dgraph Labs</Link>
        </div>
        . But now, I&apos;m back in Singapore, finishing my final year at the
        National University of Singapore.
      </Text>
      {/* <Link href="/about">
        <Button className={styles.ctaButton}>More about me ✋</Button>
      </Link> */}
    </section>
  )
}

export default Hero
