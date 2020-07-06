import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import GlobalStyle from "../styles/GlobalStyle"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const Header = styled.div`
  padding-top: 80px;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Helmet>
      <script
        src="https://kit.fontawesome.com/dab51ab02e.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
    <Navbar />
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
