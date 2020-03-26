import React from "react"
import { Heading, Text } from "rebass"
import { ScrollDownIndicator } from "react-landing-page"
import styled from "styled-components"

const StyledHero = styled.div`
  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0.5)),
    url("https://i.pinimg.com/originals/29/8f/3e/298f3eacdb07bf9f2223645236ef47e1.gif");
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

const StyledIndicator = styled(ScrollDownIndicator)`
  cursor: pointer;
`

const HeroSection = ({ setNavbarOpen }) => {
  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    })
    setNavbarOpen(false)
  }
  return (
    <StyledHero>
      <Heading fontSize={[5, 6, 7, 8]}>Muniscribe</Heading>
      <Text fontSize={[2, 3, 4, 5]} textAlign={"center"}>
        Municipal transcription services
      </Text>
      <StyledIndicator color="white" onClick={scrollDown} />
    </StyledHero>
  )
}

export default HeroSection
