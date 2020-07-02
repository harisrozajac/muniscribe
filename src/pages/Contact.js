import React, { Component } from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

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

const FormContainer = styled.div`
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

const Button = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  background-color: #79e2f7;
`

const GOOGLE_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSdIFKq_axlRJXYbNUF_zGEHyrL7tp3iBuP7YSLHOQ5HBx2vGA/viewform"

export default class Contact extends Component {
  render() {
    return (
      <>
        <Layout>
          <FormContainer>
            <h1>Send us your meeting templates</h1>
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Click Here To Upload Your Meeting Templates</Button>
            </a>
          </FormContainer>
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
}
