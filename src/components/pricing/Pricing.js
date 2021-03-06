import React, { Component } from "react"
import Zoom from "react-reveal/Zoom"
import CustomizedButton from "../utilities/CustomizedButton"

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    description: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptate.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptate.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptate."],
    linkto: ["https://google.com", "https://google.com", "https://google.com"],
    delay: [500, 1000, 1500]
  }

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing__item">
          <div className="pricing__wrapper--inner">
            <div className="pricing__title">
              <span>${this.state.prices[i]}</span>
              <span>${this.state.positions[i]}</span>
            </div>
            <div className="pricing__description">{this.state.description}</div>
            <div className="pricing__buttons">
              <CustomizedButton text="Purchase" bck="#ffa800" color="#ffffff" link={this.state.linkto[i]} />
            </div>
          </div>
        </div>
      </Zoom>
    ))

  render() {
    return (
      <div className="bck--black">
        <div className="center-wrapper pricing__section">
          <h2>Pricing</h2>
          <div className="pricing__wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    )
  }
}

export default Pricing
