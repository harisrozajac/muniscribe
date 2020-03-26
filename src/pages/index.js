import React from "react"
import Navbar from "../components/Navbar"
import "../pages/App.css"
import HeroSection from "../components/HeroSection"

class Index extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <HeroSection />
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
