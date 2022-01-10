import { Heading, Text } from "~/components/index"

import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.heroSection} id="hero">
      <Text className={styles.introText}>Hey there! My name is</Text>
      <Heading level={1}>Kevin Mingtarja.</Heading>

      <Heading className={styles.subheading} level={1}>
        I like to build softwares.
      </Heading>

      <Text className={styles.info}>
        I&apos;m an aspiring software engineer who loves designing and building
        systems and infrastructures. Currently, I&apos;m studying Computer
        Science @ National University of Singapore.
      </Text>

      {/* <Link href="/about">
        <Button className={styles.ctaButton}>More about me ✋</Button>
      </Link> */}
    </section>
  )
}

export default Hero
