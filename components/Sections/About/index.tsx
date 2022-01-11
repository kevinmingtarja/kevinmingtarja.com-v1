import { useRef } from "react"

import { skills } from "~/constants/contents"
import useScrollReveal from "~/hooks/useScrollReveal"

import { Heading, Text } from "~/components/index"

import styles from "./About.module.css"

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useScrollReveal(containerRef)

  return (
    <section id="about" ref={containerRef}>
      <Heading level={1}>About me.</Heading>

      <Text className={styles.info}>
        Hi! My name is Kevin and I&apos;m a second year computer science
        undergraduate studying at the National University of Singapore. I enjoy
        building softwares and have experience in Frontend, Backend, and Mobile
        development.
        <br />
        <br />
        Recently, I have a newfound love for designing and building technical
        infrastructures in the cloud, which started when I was given a chance to
        design the architecture and build the infrastructure (using Terraform
        and AWS) for a web app I built during my most recent internship.
        <br />
        <br />
        Here are some of the technologies I&apos;ve been working with recently:
      </Text>
      <ul className={styles.skillsList}>
        {skills?.map((skill, i) => (
          <li key={i}>
            <Text size="sm">{skill}</Text>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
