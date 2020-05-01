import React from "react"

const Navbar = ({ img, title }) => {
  return (
    <nav className="navbar bg-primary">
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
          <a href="../ContactPage/">Contact</a>{" "}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
