import React, { useState } from "react"
import cx from "classnames"
import { Squash as Hamburger } from "hamburger-react"
import scrollToId from "lib/utils/scrollToId"
import { useRouter } from "next/router"

import { navLinks } from "~/constants/links"

import { Heading, Link, Sidebar } from "../index"

import styles from "./Navbar.module.scss"

interface NavProps {
  children: React.ReactNode
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Nav>
        <NavLink className={styles.navTitle} href="/">
          <Heading className={styles.heading} level={5}>
            Kevin Mingtarja
          </Heading>
        </NavLink>

        <NavMenu>
          {navLinks?.map(({ name, id }, i) => (
            <NavLink
              key={i}
              className={styles["nav-menu-item"]}
              handleClick={() => scrollToId(id)}
            >
              <Heading level={6}>{name}</Heading>
            </NavLink>
          ))}

          <NavLink className={styles["nav-menu-item"]} href="/resume.pdf">
            <Heading level={6}>Resume</Heading>
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

interface NavLinkProps {
  children: React.ReactNode
  className?: string
  handleClick?: () => void
  href?: string
}

export const NavLink = ({
  children,
  className,
  handleClick,
  href,
}: NavLinkProps) => {
  const router = useRouter()
  const isHomePage = router.pathname === "/" && href === "/"
  const isAttachment = href?.includes(".")

  if (!href) {
    return (
      <a
        className={cx(styles["nav-link"], className)}
        onClick={handleClick}
        onKeyPress={handleClick}
      >
        {children}
      </a>
    )
  }

  if (isAttachment) {
    return (
      <a
        className={cx(styles["nav-link"], styles["nav-attachment"], className)}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      className={cx(
        styles["nav-link"],
        { [styles.navTitleHomePage]: isHomePage },
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  )
}

export const NavMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.navmenu}>{children}</div>
}
