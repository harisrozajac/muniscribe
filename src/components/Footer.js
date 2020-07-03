import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  margin-top: 1em;
  position: relative;
  left: 0;
  bottom: -8em;
  width: 100%;
  background-color: rgb(255, 255, 255);
  color: black;
  text-align: center;
  height: 2em;

  p {
    font-size: 14px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Muniscribe | All Rights Reserved</p>
    </FooterContainer>
  )
}

export default Footer
