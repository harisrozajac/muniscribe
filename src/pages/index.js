import React from "react"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import Services from "../components/Services"
import Layout from "../components/Layout"
import styled from "styled-components"

const Index = () => {
  const ContactContainer = styled.div`
    align-self: center;
    align-content: center;
    text-align: center;
    color: black;
    padding-top: 1em;
    padding-bottom: 2em;
    background-color: white;
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1em;
    }
  `
  return (
    <>
      <Layout>
        <HeroSection />
        <AboutSection />
        <ContactContainer>
          <h1>Contact Us Today!</h1>
          <h1>Info</h1>
          <h2>Phone: 435-632-6048</h2>
          <h2>Email: brim@muniscribe.com</h2>
          <h1>Address</h1>
          <h2>66 North 400 East Springville, Utah 84663</h2>
        </ContactContainer>
      </Layout>
    </>
  )
}

export default Index
