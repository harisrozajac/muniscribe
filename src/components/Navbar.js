import React from "react"

const Navbar = ({ img, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={img} /> {title}
      </h1>
      <ul>
        <li>
          {" "}
          <a href="../index">Home</a>
        </li>
        <li>
          <a href="../About">About</a>
        </li>
        <li>
          <a href="../Contact">Contact</a>{" "}
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Muniscribe",
  img: "./images/muniscribe-favicon.png",
}

export default Navbar
