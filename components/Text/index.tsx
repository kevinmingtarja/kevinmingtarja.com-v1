import React from "react"
import cx from "classnames"

import styles from "./Text.module.scss"

export type Props = {
  block?: boolean
  centered?: boolean
  children?: React.ReactNode
  className?: string
  ellipsize?: boolean
  noLeading?: boolean
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  bold?: boolean
  semibold?: boolean
  color?:
    | "black"
    | "danger"
    | "gray"
    | "light"
    | "lighter"
    | "lightest"
    | "primary"
    | "success"
    | "warning"
    | "white"
  uppercase?: boolean
  span?: boolean
}

const Text = (props: Props) => {
  const {
    centered,
    children,
    className,
    ellipsize,
    noLeading,
    size,
    bold,
    semibold,
    color,
    uppercase,
    span,
  } = props
  const cn = cx(
    styles.text,
    {
      [styles.centered]: centered,
      [styles.semibold]: semibold,
      [styles.bold]: bold,
      [styles.noLeading]: noLeading,
      [styles.ellipsize]: ellipsize,
      [styles.uppercase]: uppercase,
      [styles.xs]: size === "xs",
      [styles.sm]: size === "sm",
      [styles.md]: size === "md",
      [styles.lg]: size === "lg",
      [styles.xl]: size === "xl",
      [styles.gray]: color === "gray",
      [styles.light]: color === "light",
      [styles.lighter]: color === "lighter",
      [styles.lightest]: color === "lightest",
      [styles.black]: color === "black",
      [styles.white]: color === "white",
      [styles.primary]: color === "primary",
      [styles.success]: color === "success",
      [styles.danger]: color === "danger",
      [styles.warning]: color === "warning",
    },
    className,
  )
  if (span) return <span className={cn}>{children}</span>
  return <p className={cn}>{children}</p>
}

export default Text
