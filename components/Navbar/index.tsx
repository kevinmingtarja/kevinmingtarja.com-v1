import React, { useState } from "react"
import cx from "classnames"
import { Squash as Hamburger } from "hamburger-react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"

import useWindowDimensions from "~/hooks/useWindowDimensions"

import { Heading, Sidebar } from "../index"

import styles from "./Navbar.module.scss"

interface NavProps {
  children: React.ReactNode
  color?: string
  backgroundColor?: string
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const { height, width } = useWindowDimensions()

  return (
    <>
      <Nav>
        <NavLink href="/">
          <Heading level={5}>Kevin Mingtarja</Heading>
        </NavLink>

        <NavMenu>
          <NavLink href="/about" className={styles["nav-menu-item"]}>
            <Heading level={5}>About</Heading>
          </NavLink>
          <NavLink href="/blog" className={styles["nav-menu-item"]}>
            <Heading level={5}>Blog</Heading>
          </NavLink>
          <NavLink href="/experience" className={styles["nav-menu-item"]}>
            <Heading level={5}>Experience</Heading>
          </NavLink>
          <NavLink href="/projects" className={styles["nav-menu-item"]}>
            <Heading level={5}>Projects</Heading>
          </NavLink>
        </NavMenu>

        {/* <NavLink href="/contact">
          <Heading level={5}>Contact</Heading>
        </NavLink> */}

        {width <= 768 && (
          <div className={styles.hamburger}>
            <Hamburger toggle={setOpen} toggled={isOpen} />
          </div>
        )}
      </Nav>
      <Sidebar backgroundColor="#001A56" isOpen={isOpen} setOpen={setOpen} />
    </>
  )
}

export default Navbar

export const Nav = ({ children, backgroundColor, color }: NavProps) => {
  return (
    <nav
      className={styles.nav}
      style={{ backgroundColor: backgroundColor as string }}
    >
      {children}
    </nav>
  )
}

interface NavLinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

export const NavLink = ({
  children,
  href,
  className,
  ...linkProps
}: NavLinkProps) => {
  const router = useRouter()

  return (
    <Link {...linkProps} href={href} passHref>
      <a
        className={cx(
          styles["nav-link"],
          {
            [styles["nav-link-active"]]:
              router.asPath === href && router.asPath !== "/",
          },
          className,
        )}
      >
        {children}
      </a>
    </Link>
  )
}

export const NavMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.navmenu}>{children}</div>
}
