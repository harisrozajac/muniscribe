import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  margin-top: 2em;
  margin-right: 8em;
  margin-left: 8em;
  font-weight: bold;

  div {
    margin-top: 2em;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2em;
    margin-right: 1em;
    margin-left: 1em;
    font-size: 14px;
  }
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.img`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  align-self: center;
  margin-right: 2em;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 0;
  }
`

const Services = () => {
  return (
    <>
      <Container>
        <RowContainer>Text</RowContainer>
        <ImageContainer></ImageContainer>
      </Container>
    </>
  )
}

export default Services
