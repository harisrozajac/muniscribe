import React from "react"
import Navbar from "../components/Navbar"
import "../pages/App.css"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"

class Index extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <HeroSection />
        <AboutSection />
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
