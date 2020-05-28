import React from "react"
import Navbar from "../components/Navbar"
import "../pages/App.css"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import styled from "styled-components"

const ContactContainer = styled.div`
  align-self: center;
  align-content: center;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 2em;
  background-color: #ff7260;

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1em;
  }
`

class Index extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ContactContainer>
          <h1>Info</h1>
          <h2>Phone: 435-632-6048</h2>
          <h2>Email: brim@muniscribe.com</h2>
          <h1>Address</h1>
          <h2>66 North 400 East Springville, Utah 84663</h2>
        </ContactContainer>
        <div class="footer">
          <p>
            © {new Date().getFullYear()} Muniscribe, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </div>
      </>
    )
  }
}

export default Index
