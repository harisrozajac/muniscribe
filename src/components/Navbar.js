import React from "react"
import styled from "styled-components"

const NavbarContainer = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  margin-bottom: 0rem;
  background: #ff7272;
  height: 5em;
  font-size: 16px;

  ul {
    display: flex;
  }

  a {
    color: #fff;
    padding: 0.45rem;
    margin: 0 0.25rem;
    align-self: center;
    font-weight: bold;
  }

  a:hover {
    color: var(--light-color);
  }

  @media (max-width: 700px) {
    display: block;
    text-align: center;
    align-self: center;
    margin-left: 0px;
    padding-bottom: 5em;

    ul {
      text-align: center;
      justify-content: center;
      align-self: center;
    }
  }
`

const Navbar = ({ img, title }) => {
  return (
    <NavbarContainer>
      <h1>
        <a href="/">Muniscribe</a>
      </h1>
      <ul>
        <li>
          {" "}
          <a href="/">Home</a>
        </li>
        <li>
          <a href="../About/">About</a>
        </li>
        <li>
          <a href="../Contact/">Contact</a>{" "}
        </li>
      </ul>
    </NavbarContainer>
  )
}

export default Navbar
