import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  color: black;
  text-align: center;
  height: 50%;
`

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <p>© {new Date().getFullYear()} Muniscribe | All Rights Reserved</p>
      </FooterContainer>
    </div>
  )
}

export default Footer
