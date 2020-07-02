import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import GlobalStyle from "../styles/GlobalStyle"
import styled from "styled-components"

const Header = styled.div`
  padding-top: 80px;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
