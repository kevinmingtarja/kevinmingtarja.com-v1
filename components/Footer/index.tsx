import React from "react"

import { footerLinks } from "~/constants/contents"

import Link from "../Link"
import Text from "../Text"

import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Text className={styles.text}>Built and Designed by Kevin Mingtarja</Text>

      <div className={styles.linkContainerDesktop}>
        {footerLinks.map(({ name, href, isExternal, icon }) => (
          <Link key={name} className={styles.link} href={href}>
            <Text size="sm">{name}</Text>
          </Link>
        ))}
      </div>

      <div className={styles.linkContainerMobile}>
        {footerLinks.map(({ name, href, isExternal, icon }) => (
          <Link key={name} className={styles.link} href={href}>
            {icon}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
