import Footer from "../Footer"
import Navbar from "../Navbar"
import ScrollButton from "../ScrollButton"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollButton />
    </>
  )
}

export default Layout
