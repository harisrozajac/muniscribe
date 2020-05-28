import React, { Component } from "react"
import "../pages/App.css"
import Navbar from "../components/Navbar"
import { Text } from "rebass"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 2em;
  margin-right: 2em;
  margin-left: 2em;
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
            efficient while we do your busy work. Owner, Morgan Brim obtained a
            master's degree in city and metropolitain planning from the
            University of Utah and is a member of the American Institute of
            Certified Planners. He has worked in municipal government for 10
            years providing him great insight into the requirements for
            effective meeting minutes. Brooke Brim obtained a Bachelor of Arts
            from the University of Utah in english language and literature. She
            has worked as an office assistant, media manager and transcriber.
            Currently, her primary focus is MuniScribe and meeting each clients
            needs thoroughly. She understands the importance of a quality and
            complete document.{" "}
          </Text>
        </Container>
      </>
    )
  }
}
