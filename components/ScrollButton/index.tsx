import { useCallback, useEffect, useState } from "react"
import cx from "classnames"
import { useRouter } from "next/router"
import { FiChevronUp } from "react-icons/fi"

import styles from "./ScrollButton.module.css"

type ScrollArrowProps = {
  heightThreshold?: number
  /**
   * pages/routes where we don't want the button to appear. i.e. ['/faq', '/province']
   */
  pagesExcluded?: string[]
}

export const ScrollButton = ({
  heightThreshold = 400,
  pagesExcluded,
}: ScrollArrowProps) => {
  const [showScroll, setShowScroll] = useState(false)
  const { route } = useRouter()

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > heightThreshold) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= heightThreshold) {
      setShowScroll(false)
    }
  }, [showScroll])

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return () => window.removeEventListener("scroll", checkScrollTop)
  }, [checkScrollTop])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (pagesExcluded?.includes(route)) return null

  return (
    <button
      aria-label="Scroll to Top"
      className={cx(styles.btn, { [styles.show]: showScroll })}
      onClick={scrollTop}
    >
      <FiChevronUp color="white" size={30} />
    </button>
  )
}

export default ScrollButton
