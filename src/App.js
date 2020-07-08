import React from "react"
import "./resources/styles.scss"
import { Element } from "react-scroll"

import Header from "./components/header_footer/Header"
import Featured from "./components/featured/"
import VenueInfo from "./components/venue_info/VenueInfo"
import Highlights from "./components/highlights/"
import Pricing from "./components/pricing/Pricing"
import Location from "./components/location/Location"
import Footer from "./components/header_footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />

      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venueInfo">
        <VenueInfo />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  )
}

export default App
