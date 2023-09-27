/* eslint-disable @next/next/no-img-element */
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

      <div className={styles.container}>
        <div>
          <Text className={styles.info}>
            Hi! My name is Kevin and I&apos;m a final year computer science
            undergraduate studying at the National University of Singapore. I
            enjoy building softwares and have experience in Backend, Cloud
            Infrastructure, and Frontend as well.
            <br />
            <br />
            My main interests lies in cloud infrastructure, databases, and
            distributed systems, mainly due to my previous work at Dgraph Labs.
            At Dgraph, we were building a distributed graph database, and a
            fully managed cloud database, which was a lot of fun.
            <br />
            <br />
            Here are some of the technologies I&apos;ve been working with
            recently:
          </Text>
          <ul className={styles.skillsList}>
            {skills?.map((skill, i) => (
              <li key={i}>
                <Text size="sm">{skill}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
