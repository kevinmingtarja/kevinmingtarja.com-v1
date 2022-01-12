import React, { useEffect } from "react"
import cx from "classnames"
import scrollToId from "lib/utils/scrollToId"

import { navLinks } from "~/constants/links"

import { Heading } from "../index"

import styles from "./Sidebar.module.scss"

const Sidebar = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={cx(styles.backdrop, { [styles.backdropOpen]: isOpen })}
      onClick={() => setOpen(false)}
    >
      <SidebarContainer isOpen={isOpen}>
        <SidebarWrapper>
          <SidebarMenu>
            {navLinks?.map(({ name, id }, i) => (
              <SidebarLink key={i} handleClick={() => scrollToId(id)}>
                <Heading level={6}>{name}</Heading>
              </SidebarLink>
            ))}
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
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
  handleClick,
  color = "",
}: {
  children: React.ReactNode
  handleClick?: () => void
  color?: string | undefined
}) => {
  return (
    <a
      className={styles.link}
      onClick={handleClick}
      onKeyPress={handleClick}
      style={{ color }}
    >
      {children}
    </a>
  )
}
