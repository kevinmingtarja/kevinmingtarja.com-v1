import { useRouter } from "next/router"
import React, { useEffect } from "react"

import Footer from "../Footer"
import Navbar from "../Navbar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
