import { useRef } from "react"
import { FiExternalLink, FiGithub, FiMonitor } from "react-icons/fi"

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
      <ul className={styles.projectGrid}>
        {projects?.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Projects

const ProjectItem = ({ project }: { project: Project }) => {
  const { name, description, image, githubLink, websiteLink, technologies } =
    project

  return (
    <li className={styles.projectItemContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.iconsContainer}>
          <FiMonitor size={34} className={styles.monitorIcon} />
          <div>
            {githubLink && (
              <Link href={githubLink}>
                <FiGithub size={24} className={styles.icon} />
              </Link>
            )}
            {websiteLink && (
              <Link href={websiteLink}>
                <FiExternalLink size={24} className={styles.icon} />
              </Link>
            )}
          </div>
        </div>

        <Heading className={styles.headingContainer} level={5}>
          {name}
        </Heading>

        <Text className={styles.description} size="sm">
          {description}
        </Text>
      </div>
      <footer>
        <ul className={styles.technologies}>
          {technologies &&
            technologies.map((technology, i) => (
              <li key={i}>
                <Text className={styles.technology} size="xs">
                  {technology}
                </Text>
              </li>
            ))}
        </ul>
      </footer>
    </li>
  )
}
