import React from "react"
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si"

import Link from "../Link"
import Text from "../Text"

import { links } from "./constants"

import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Text className={styles.text}>Built and Designed by Kevin Mingtarja</Text>

      <div className={styles.linkContainerDesktop}>
        {links.map(({ name, href, isExternal, icon }) => (
          <Link
            key={name}
            className={styles.link}
            href={href}
            isExternal={isExternal}
          >
            <Text size="sm">{name}</Text>
          </Link>
        ))}
      </div>

      <div className={styles.linkContainerMobile}>
        {links.map(({ name, href, isExternal, icon }) => (
          <Link
            key={name}
            className={styles.link}
            href={href}
            isExternal={isExternal}
          >
            {icon}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
