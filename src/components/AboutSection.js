import React from "react"
import { Heading } from "rebass"
import { ScrollDownIndicator } from "react-landing-page"
import styled from "styled-components"

const StyledHero = styled.div`
  object-fit: cover;
  min-height: 100vh;
  background-image: #f5f0f2;

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

  h1 {
    text-align: center;
    margin-left: 1.5em;
    margin-right: 1.5em;
    color: #000000;

    @media screen and (max-width: 1024px) {
      font-size: 38px;
    }

    @media screen and (max-width: 832px) {
      font-size: 32px;
    }

    @media screen and (max-width: 639px) {
      font-size: 24px;
    }
  }
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
      <h1>
        Welcome to MuniScribe, located in the greater Salt Lake City Area, we
        offer our services nation-wide. We provide a quality transcription
        service that focuses on professional meeting minutes and fixed
        documents.We offer a{" "}
        <span style={{ color: "blue" }}>personal approach</span> to getting your
        busywork accomplished and are happy to tailor our service to meet your
        needs.
      </h1>
      <StyledIndicator onClick={scrollDown} />
    </StyledHero>
  )
}

export default AboutSection
