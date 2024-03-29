import React from "react"
import Footer from "./Footer"
import Navbar from "./navbar/Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
