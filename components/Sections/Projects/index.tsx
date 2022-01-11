import { useRef } from "react"

import { Experience, experiences } from "~/constants/contents"
import useScrollReveal from "~/hooks/useScrollReveal"

import { Heading, Link, Text } from "~/components/index"

import styles from "./Projects.module.css"

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useScrollReveal(containerRef)

  return (
    <section id="projects" ref={containerRef}>
      <Heading className={styles.sectionHeading} level={1}>
        Projects.
      </Heading>
      {experiences?.map((experience, i) => (
        <ExperienceItem key={i} experience={experience} />
      ))}
    </section>
  )
}

export default Projects

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  const { role, company, period, description, technologies } = experience
  const { name, link } = company

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.headingContainer}>
        <Heading level={5}>{`${role} @`} </Heading>
        <Link href={link}>
          <Heading level={5}>{`${name}`}</Heading>
        </Link>
      </div>

      <Text className={styles.period}>{period}</Text>

      <ul className={styles.descriptions}>
        {description &&
          description.map((desc, i) => (
            <li key={i}>
              <Text>{desc}</Text>
            </li>
          ))}
      </ul>

      {/* <Text>Technologies used:</Text>
      <ul className={styles.skillsList}>
        {technologies &&
          technologies.map((skill, i) => (
            <li key={i}>
              <Text size="sm">{skill}</Text>
            </li>
          ))}
      </ul> */}
    </div>
  )
}
