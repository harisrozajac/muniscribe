import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 2em;
  margin-right: 8em;
  margin-left: 8em;
  margin-bottom: 2em;
  font-weight: bold;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    margin-top: 2em;
    margin-right: 1em;
    margin-left: 1em;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2em;
    margin-right: 1em;
    margin-left: 1em;
    font-size: 12px;
  }

  @media screen and (max-width: 575px) {
    margin-top: 2em;
    margin-right: 1em;
    margin-left: 1em;
    font-size: 10px;
  }
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;

  h1 {
    margin-left: 2em;
    font-size: 30px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    h1 {
      margin-left: 0em;
    }
  }
`

const IconContainer = styled.div`
  border-radius: 50%;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 0;
  }

  i {
    color: red;
    opacity: 0.9;

    &:hover {
      color: var(--primary-color);
    }
  }
`

const Services = () => {
  return (
    <>
      <Container>
        <RowContainer>
          <IconContainer>
            <i class="fas fa-keyboard fa-3x"></i>
          </IconContainer>
          <h1>Every year, we process over 2000 hours of municipal meetings</h1>
        </RowContainer>
        <RowContainer>
          <IconContainer>
            <i class="fas fa-clock fa-3x"></i>
          </IconContainer>
          <h1>We will transcribe each meeting within 5-10 business days</h1>
        </RowContainer>
        <RowContainer>
          <IconContainer>
            <i class="fas fa-binoculars fa-3x"></i>
          </IconContainer>
          <h1>Our editors will proofread every meeting</h1>
        </RowContainer>
      </Container>
    </>
  )
}

export default Services
