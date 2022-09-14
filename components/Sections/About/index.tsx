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
            Hi! My name is Kevin and I&apos;m a third year computer science
            undergraduate studying at the National University of Singapore, and
            currently doing a one year internship as part of NUS Overseas
            Colleges Silicon Valley. I enjoy building softwares and have
            experience in Frontend, Backend, and Mobile development.
            <br />
            <br />
            Recently, I have a newfound interest in databases and distributed
            systems due to my current work at Dgraph, where we are building a
            distributed graph database with horizontal scalability, distributed
            cluster-wide ACID transactions, high availability, and all that good
            stuff.
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
        <div className={styles["image-container"]}>
          <img
            alt="me"
            className={styles.image}
            height={300}
            src="/portrait.jpg"
            width={300}
          />
        </div>
      </div>
    </section>
  )
}

export default About
