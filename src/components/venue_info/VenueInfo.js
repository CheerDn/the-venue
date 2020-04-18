import React from 'react';
import Zoom from 'react-reveal/Zoom';

import iconCalendar from '../../resources/images/icons/calendar.png'
import iconLocation from '../../resources/images/icons/location.png'


const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
                
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div 
                    className="vn_icon"
                    style = {{
                      background:`url(${iconCalendar})`
                    }}
                  ></div>
                  <div className="vn_title">
                    Event Date & Time
                  </div>
                  <div className="vn_desc">
                    19 December 2020 @07:30 pm
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div 
                    className="vn_icon"
                    style = {{
                      background:`url(${iconLocation})`
                    }}
                  ></div>
                  <div className="vn_title">
                    Event Location
                  </div>
                  <div className="vn_desc">
                    2, Sec. 4, <br></br>Nanjing E. Rd.,<br></br> Songshan District, Taipei City, Taiwan

                  </div>
                </div>
              </div>
            </div>
          </Zoom>
 
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;