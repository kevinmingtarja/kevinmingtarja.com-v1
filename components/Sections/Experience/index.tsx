import { useEffect, useRef } from "react"

import { srConfig } from "~/constants/config"
import { skills } from "~/constants/index"

import { Heading, Text } from "~/components/index"

import styles from "./Experience.module.css"

const Experience = () => {
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
    <section id="experience" ref={containerRef}>
      <Heading level={1}>Experience.</Heading>
    </section>
  )
}

export default Experience
