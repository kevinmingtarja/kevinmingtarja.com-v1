import { RefObject, useEffect } from "react"

import { srConfig } from "~/constants/config"

const useScrollReveal = (ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    async function animate() {
      if (ref.current) {
        const sr = (await import("scrollreveal")).default
        sr().reveal(ref.current, srConfig)
      }
    }
    animate()
  }, [ref])
}

export default useScrollReveal
