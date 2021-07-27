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
          <Heading level={1}>Kevin Mingtarja</Heading>
        </NavLink>

        <NavMenu>
          <NavLink href="/about">
            <Heading level={1}>About</Heading>
          </NavLink>
          <NavLink href="/blog">
            <Heading level={1}>Blog</Heading>
          </NavLink>
          <NavLink href="/experience">
            <Heading level={1}>Experience</Heading>
          </NavLink>
          <NavLink href="/projects">
            <Heading level={1}>Projects</Heading>
          </NavLink>
        </NavMenu>

        <NavLink href="/">
          <Heading level={1}>Contact</Heading>
        </NavLink>

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
}

export const NavLink = ({ children, href, ...linkProps }: NavLinkProps) => {
  const router = useRouter()

  return (
    <Link {...linkProps} href={href} passHref>
      <a
        className={cx(styles["nav-link"], {
          [styles["nav-link-active"]]: router.asPath === href,
        })}
      >
        {children}
      </a>
    </Link>
  )
}

export const NavMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.navmenu}>{children}</div>
}
