import React from "react"
import cx from "classnames"
import Link from "next/link"

import { Heading } from "../index"

import styles from "./Sidebar.module.scss"

const Sidebar = ({
  isOpen,
  backgroundColor,
}: {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  backgroundColor?: string
}) => {
  return (
    <SidebarContainer backgroundColor={backgroundColor} isOpen={isOpen}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href="about">
            <Heading level={6}>Placeholder</Heading>
          </SidebarLink>
          <SidebarLink href="discover">
            <Heading level={6}>Placeholder</Heading>
          </SidebarLink>
          <SidebarLink href="services">
            <Heading level={6}>Placeholder</Heading>
          </SidebarLink>
          <SidebarLink href="signup">
            <Heading level={6}>Placeholder</Heading>
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

export const SidebarContainer = ({
  children,
  isOpen,
  backgroundColor = "",
}: {
  children: React.ReactNode
  isOpen: boolean

  backgroundColor?: string | undefined
}) => {
  return (
    <aside
      className={cx(styles.container, { [styles.open]: isOpen })}
      style={{ backgroundColor }}
    >
      {children}
    </aside>
  )
}

export const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export const SidebarMenu = ({ children }: { children: React.ReactNode }) => {
  return <ul className={styles.menu}>{children}</ul>
}

export const SidebarLink = ({
  children,
  href,
  color = "",
}: {
  children: React.ReactNode
  href: string
  color?: string | undefined
}) => {
  return (
    <Link href={href}>
      <a className={styles.link} style={{ color }}>
        {children}
      </a>
    </Link>
  )
}
