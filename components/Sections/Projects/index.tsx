import { useRef } from "react"

import { Project, projects } from "~/constants/contents"
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
      {projects?.map((project, i) => (
        <ProjectItem key={i} project={project} />
      ))}
    </section>
  )
}

export default Projects

const ProjectItem = ({ project }: { project: Project }) => {
  const { name, description, githubLink, websiteLink, technologies } = project

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.headingContainer}>
        <Heading level={5}>{name} </Heading>
      </div>

      {/* <Text className={styles.period}>{period}</Text>

      <ul className={styles.descriptions}>
        {description &&
          description.map((desc, i) => (
            <li key={i}>
              <Text>{desc}</Text>
            </li>
          ))}
      </ul> */}

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
