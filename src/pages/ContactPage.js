import React, { Component } from "react"
import Navbar from "../components/Navbar"
import ContactForm from "../components/ContactForm"

export default class ContactPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div>
          <p> Contact </p>{" "}
        </div>
        <ContactForm />
      </>
    )
  }
}
