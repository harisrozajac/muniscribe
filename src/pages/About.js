import React, { Component } from "react"
import "../pages/App.css"
import Navbar from "../components/Navbar"
import { Text } from "rebass"

export default class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Text>This is our story</Text>
      </>
    )
  }
}
