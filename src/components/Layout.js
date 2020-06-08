import React from "react"
import Navbar from "./Navbar"

export default ({ children }) => (
  <>
    <Navbar />
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  </>
)
