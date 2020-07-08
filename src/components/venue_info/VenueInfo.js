import React from "react"
import Zoom from "react-reveal/Zoom"

import iconCalendar from "../../resources/images/icons/calendar.png"
import iconLocation from "../../resources/images/icons/location.png"

const VenueInfo = () => {
  return (
    <div className="bck--black">
      <div className="center-wrapper">
        <div className="vn__wrapper">
          <Zoom duration={500}>
            <div className="vn__item">
              <div className="vn__outer">
                <div className="vn__inner">
                  <div className="vn__icon--square bck--orange"></div>
                  <div
                    className="vn__icon"
                    style={{
                      background: `url(${iconCalendar})`
                    }}
                  ></div>
                  <div className="vn__title">Event Date & Time</div>
                  <div className="vn__desc">19 December 2020 @07:30 pm</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn__item">
              <div className="vn__outer">
                <div className="vn__inner">
                  <div className="vn__icon--square bck--yellow"></div>
                  <div
                    className="vn__icon"
                    style={{
                      background: `url(${iconLocation})`
                    }}
                  ></div>
                  <div className="vn__title">Event Location</div>
                  <div className="vn__desc">
                    2, Sec. 4, <br></br>Nanjing E. Rd.,<br></br> Songshan District, Taipei City, Taiwan
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}

export default VenueInfo
