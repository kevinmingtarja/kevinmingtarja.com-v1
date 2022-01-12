import React, { useState } from "react"
import cx from "classnames"
import { Squash as Hamburger } from "hamburger-react"
import scrollToId from "lib/utils/scrollToId"
import { useRouter } from "next/router"

import { navLinks } from "~/constants/links"

import { Heading, Sidebar } from "../index"

import styles from "./Navbar.module.scss"

interface NavProps {
  children: React.ReactNode
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Nav>
        <Heading className={styles.heading} level={5}>
          Kevin Mingtarja
        </Heading>

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
}

export const NavLink = ({ children, className, handleClick }: NavLinkProps) => {
  const router = useRouter()

  return (
    <a
      className={cx(styles["nav-link"], className)}
      onClick={handleClick}
      onKeyPress={handleClick}
    >
      {children}
    </a>
  )

  // return (
  //   <Link {...linkProps} href={href} passHref>
  //     <a
  //       className={cx(
  //         styles["nav-link"],
  //         {
  //           [styles["nav-link-active"]]:
  //             router.asPath === href && router.asPath !== "/",
  //         },
  //         className,
  //       )}
  //     >
  //       {children}
  //     </a>
  //   </Link>
  // )
}

export const NavMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.navmenu}>{children}</div>
}
