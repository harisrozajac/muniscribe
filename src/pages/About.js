import React, { Component } from "react"
import { Image } from "rebass"
import { Text } from "rebass"
import styled from "styled-components"
import morgan from "../images/morgan.jpg"
import brooke from "../images/brooke.jpg"
import Layout from "../components/Layout"

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

export default class About extends Component {
  render() {
    return (
      <>
        <Layout>
          <Container>
            <Text>
              At MuniScribe, we work with you to bring your minutes to date,
              stay current, edit and format meeting minutes. Our intent is to
              provide quality municipal transcription, meanwhile you are able to
              stay efficient while we do your busy work.
            </Text>
            <RowContainer>
              <ImageContainer src={morgan} />
              <Text>
                Owner, Morgan Brim obtained a master's degree in city and
                metropolitan planning from the University of Utah and is a
                member of the American Institute of Certified Planners. He has
                worked in municipal government for 10 years providing him great
                insight into the requirements for effective meeting minutes.
              </Text>
            </RowContainer>
            <RowContainer>
              <ImageContainer src={brooke} />
              <Text>
                Brooke Brim obtained a Bachelor of Arts from the University of
                Utah in English language and literature. She has worked as an
                office assistant, media manager and transcriber. Currently, her
                primary focus is MuniScribe and meeting each clients needs
                thoroughly. She understands the importance of a quality and
                complete document.
              </Text>
            </RowContainer>
          </Container>
        </Layout>
      </>
    )
  }
}
