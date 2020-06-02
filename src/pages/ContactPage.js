import React, { Component } from "react"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import "../pages/App.css"

export default class ContactPage extends Component {
  render() {
    return (
      <>
        <ContactForm />
        <div style={{ marginBottom: "15em" }}></div>
        <Footer />
      </>
    )
  }
}
