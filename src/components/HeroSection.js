import React from "react"
import { Heading, Text } from "rebass"
import styled from "styled-components"
import TypingMachine from "../images/typing-machine.gif"

const StyledHero = styled.div`
  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0.5)),
    url(${TypingMachine});
  object-fit: cover;
  min-height: 100vh;
  background-color: #000;

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

const HeroSection = () => {
  return (
    <StyledHero>
      <Heading fontSize={[5, 6, 7, 8]}>Muniscribe</Heading>
      <Text fontSize={[2, 3, 4, 5]} textAlign={"center"}>
        Municipal transcription services
      </Text>
    </StyledHero>
  )
}

export default HeroSection
