import { useEffect, useRef } from "react"

import { srConfig } from "~/constants/config"

import { Heading, Text } from "~/components/index"

import styles from "./About.module.css"

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    async function animate() {
      if (containerRef.current) {
        const sr = (await import("scrollreveal")).default
        sr().reveal(containerRef.current, srConfig)
      }
    }
    animate()
  }, [])

  return (
    <section id="about" ref={containerRef}>
      <Heading level={1}>About me.</Heading>

      <Text className={styles.info}>
        Hello! I&apos;m a second year computer science undergraduate studying at
        the National University of Singapore. I enjoy building softwares and
        have experience in Frontend, Backend, Mobile development.
        <br />
        <br />
        Recently, I have a newfound love for designing and building technical
        infrastructures in the cloud which started when I was given a chance to
        design the architecture and build the infrastructure using Terraform and
        AWS for a web app I built on my most recent internship.
        <br />
        <br />
        {/* Here are some of the technologies I&apos;m proficient with: */}
      </Text>
    </section>
  )
}

export default About
