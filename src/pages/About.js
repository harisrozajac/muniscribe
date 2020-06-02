import React, { Component } from "react"
import "../pages/App.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Text } from "rebass"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  margin-top: 2em;
  margin-right: 8em;
  margin-left: 8em;

  div {
    margin-top: 2em;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2em;
    margin-right: 1em;
    margin-left: 1em;
  }
`

export default class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container>
          <Text>
            At MuniScribe, we work with you to bring your minutes to date, stay
            current, edit and format meeting minutes. Our intent is to provide
            quality municipal transcription, meanwhile you are able to stay
            efficient while we do your busy work.
          </Text>
          <Text>
            Owner, Morgan Brim obtained a master's degree in city and
            metropolitan planning from the University of Utah and is a member of
            the American Institute of Certified Planners. He has worked in
            municipal government for 10 years providing him great insight into
            the requirements for effective meeting minutes.
          </Text>
          <Text>
            Brooke Brim obtained a Bachelor of Arts from the University of Utah
            in English language and literature. She has worked as an office
            assistant, media manager and transcriber. Currently, her primary
            focus is MuniScribe and meeting each clients needs thoroughly. She
            understands the importance of a quality and complete document.
          </Text>
        </Container>
        <Footer />
      </>
    )
  }
}
