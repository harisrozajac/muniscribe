import React, { Component } from "react"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import "../pages/App.css"
import styled from "styled-components"

const ContactContainer = styled.div`
  align-self: center;
  align-content: center;
  text-align: center;
  color: black;
  padding-top: 1em;
  padding-bottom: 2em;
  background-color: lightblue;
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1em;
  }
`

export default class ContactPage extends Component {
  render() {
    return (
      <>
        <ContactForm />
        <ContactContainer>
          <h1>Contact Us Today!</h1>
          <h1>Info</h1>
          <h2>Phone: 435-632-6048</h2>
          <h2>Email: brim@muniscribe.com</h2>
          <h1>Address</h1>
          <h2>66 North 400 East Springville, Utah 84663</h2>
        </ContactContainer>
        <Footer />
      </>
    )
  }
}
