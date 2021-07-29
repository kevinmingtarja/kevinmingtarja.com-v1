import React from "react"

import Text from "../Text"

import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Text size="sm">To-do: Add github links etc</Text>
      <Text size="sm">Built and Designed by Kevin Mingtarja</Text>
      {/* <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Powered by{" "}
        <span className={styles.logo}>
          
        </span>
      </a> */}
    </footer>
  )
}

export default Footer
