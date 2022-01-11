import React from "react"
import cx from "classnames"
import NextLink from "next/link"

import styles from "./Link.module.scss"

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode
  href: string
  className?: string
  type?: "text"
}

const Link = ({ children, href, type, className, ...linkProps }: LinkProps) => {
  const isExternal = href.startsWith("http://") || href.startsWith("https://")
  const cn = cx(
    {
      [styles.link]: (children as any).type.name !== "Button",
      [styles.textLink]:
        (children as any).type.name === "Text" ||
        (children as any).type.name === "Heading",
    },
    className,
  )

  return isExternal ? (
    <a
      {...linkProps}
      className={cn}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  ) : (
    <NextLink {...linkProps} href={href} passHref>
      <a className={cn}>{children}</a>
    </NextLink>
  )
}

export default Link
