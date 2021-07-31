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
          <NavLink className={styles["nav-menu-item"]} href="/about">
            <Heading level={6}>About</Heading>
          </NavLink>
          <NavLink className={styles["nav-menu-item"]} href="/blog">
            <Heading level={6}>Blog</Heading>
          </NavLink>
          <NavLink className={styles["nav-menu-item"]} href="/experience">
            <Heading level={6}>Experience</Heading>
          </NavLink>
          <NavLink className={styles["nav-menu-item"]} href="/projects">
            <Heading level={6}>Projects</Heading>
          </NavLink>
        </NavMenu>

        <div className={styles.hamburger}>
          <Hamburger toggle={setOpen} toggled={isOpen} />
        </div>
      </Nav>
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
    </>
  )
}

export default Navbar

export const Nav = ({ children }: NavProps) => {
  return <nav className={styles.nav}>{children}</nav>
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
