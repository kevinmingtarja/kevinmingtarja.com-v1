import { useRef } from "react"

import { Experience, experiences } from "~/constants/contents"
import useScrollReveal from "~/hooks/useScrollReveal"
import useWindowDimensions from "~/hooks/useWindowDimensions"

import { Heading, Link, Text } from "~/components/index"

import styles from "./Experience.module.css"

const MyExperience = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useScrollReveal(containerRef)

  return (
    <section id="experience" ref={containerRef}>
      <Heading className={styles.sectionHeading} level={1}>
        Experience.
      </Heading>
      {experiences?.map((experience, i) => (
        <ExperienceItem key={i} experience={experience} />
      ))}
    </section>
  )
}

export default MyExperience

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  const { role, company, period, description, technologies } = experience
  const { name, link } = company

  const { width } = useWindowDimensions()

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.headingContainer}>
        <Heading level={5}>
          {width >= 740 ? `${role} @ ` : `${role} \n@ `}
          <Link className={styles.link} href={link}>
            {name}
          </Link>
        </Heading>
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
