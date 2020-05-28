import React from "react"
import { Heading, Text } from "rebass"
import { ScrollDownIndicator } from "react-landing-page"
import styled from "styled-components"
import Navbar from "./Navbar"

const StyledHero = styled.div`
  object-fit: cover;
  min-height: 100vh;
  background-color: #ff7272;

  span {
    color: blue;
  }

  @media screen and (max-width: 768) {
    background-attachment: scroll;
  }
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`

const StyledIndicator = styled(ScrollDownIndicator)`
  cursor: pointer;
`

const AboutSection = ({ setNavbarOpen }) => {
  const scrollDown = () => {
    window.scroll({
      top: 850,
      left: 0,
      behavior: "smooth",
    })
  }
  return (
    <StyledHero>
      <Heading
        fontSize={[3, 4, 5, 6]}
        textAlign={"center"}
        marginLeft={"1.5em"}
        marginRight={"1.5em"}
      >
        Welcome to MuniScribe, located in the greater Salt Lake City Area, we
        offer our services nation wide. We provide a quality transcription
        service that focuses on professional meeting minutes and fixed
        documents.We offer a{" "}
        <span style={{ color: "blue" }}>personal approach</span> to getting your
        busywork accomplished and are happy to tailor our service to meet your
        needs.
      </Heading>
      <StyledIndicator onClick={scrollDown} />
    </StyledHero>
  )
}

export default AboutSection
