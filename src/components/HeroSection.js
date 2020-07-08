import React from "react"
import styled from "styled-components"
import TypingMachine from "../images/typing-machine.gif"

const StyledHero = styled.div`
  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0.5)),
    url(${TypingMachine});
  object-fit: cover;
  min-height: 100vh;
  width: 100%;
  background-color: #000;
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

  @media screen and (max-width: 768) {
    background-attachment: scroll;
  }

  h1 {
    font-size: 72px;

    @media screen and (max-width: 832px) {
      font-size: 48px;
    }

    @media screen and (max-width: 639px) {
      font-size: 32px;
    }
  }

  h2 {
    font-size: 32px;
    margin-bottom: 4em;

    @media screen and (max-width: 832px) {
      font-size: 24px;
    }

    @media screen and (max-width: 639px) {
      font-size: 16px;
    }
  }
`

const HeroSection = () => {
  return (
    <StyledHero>
      <h1>Muniscribe</h1>
      <h2>Municipal transcription services</h2>
    </StyledHero>
  )
}

export default HeroSection
