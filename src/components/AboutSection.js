import React from "react"
import { Heading, Text } from "rebass"
import { ScrollDownIndicator } from "react-landing-page"
import styled from "styled-components"

const StyledHero = styled.div`
  object-fit: cover;
  min-height: 100vh;
  background-color: #ff7272;

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
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    })
  }
  return (
    <StyledHero>
      <Heading fontSize={[5, 6, 7, 8]}>
        Relax and let us do the hard work
      </Heading>
      <Text fontSize={[2, 3, 4, 5]} textAlign={"center"}></Text>
      <StyledIndicator color="white" onClick={scrollDown} />
    </StyledHero>
  )
}

export default AboutSection
