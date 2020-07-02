import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  margin-top: 1em;
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  color: black;
  text-align: center;
  height: 2em;
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Muniscribe | All Rights Reserved</p>
    </FooterContainer>
  )
}

export default Footer
