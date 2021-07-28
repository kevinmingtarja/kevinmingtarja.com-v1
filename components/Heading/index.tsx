import React from "react"
import cx from "classnames"

import { Color, ColorName } from "~/constants/theme"

import styles from "./Heading.module.scss"

export type Props = {
  centered?: boolean
  children?: React.ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  noLeading?: boolean

  color?: ColorName
}

const Heading = (props: Props) => {
  const { centered, children, className, level = 1, noLeading, color } = props

  const cn = cx(
    styles.heading,
    {
      [styles.centered]: centered,
      [styles.noLeading]: noLeading,
      [styles.sm]: level === 6,
      [styles.md]: level === 5,
      [styles.lg]: level === 4,
      [styles.xl]: level === 3,
      [styles.twoxl]: level === 2,
      [styles.threexl]: level === 1,
    },
    className,
  )
  if (level === 1)
    return (
      <h1 className={cn} style={{ color: color && Color[color] }}>
        {children}
      </h1>
    )
  else if (level === 2)
    return (
      <h2 className={cn} style={{ color: color && Color[color] }}>
        {children}
      </h2>
    )
  else if (level === 3)
    return (
      <h3 className={cn} style={{ color: color && Color[color] }}>
        {children}
      </h3>
    )
  else
    return (
      <h4 className={cn} style={{ color: color && Color[color] }}>
        {children}
      </h4>
    )
}

export default Heading
