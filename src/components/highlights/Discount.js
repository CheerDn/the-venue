import React, { Component } from "react"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"

import CustomizedButton from "../utilities/CustomizedButton"

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  }

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => this.percentage(), 20)
  }

  render() {
    return (
      <div className="center-wrapper">
        <div className="discount__wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount__percentage">
              <span>{this.state.discountStart}%</span>
              <span>off</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount__description">
              <h3>Purchase tickets before 20 SEPT</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero quia sequi officia ullam quasi at itaque in soluta doloribus! Error nam expedita totam deleniti tempore minima excepturi enim adipisci?</p>
              <CustomizedButton text="Purchase tickets" bck="#ffa800" color="white" link="https://google.com" />
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}

export default Discount
