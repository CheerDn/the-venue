import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {
  
  state = {
    deadline: 'Dec, 19, 2020',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  }
  
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {

    } else {
      let seconds = Math.floor((time/1000) % 60);
      let minutes = Math.floor((time/1000/60) % 60);
      let hours = Math.floor((time/1000/60/60) % 24);
      let days = Math.floor(time/1000/60/60/24 );
      this.setState({
        days,
        hours,
        minutes,
        seconds
      })
    }
    
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }
  
  render() {
    return (
      <Slide left delay={1500}>
        <div className="countdown__wrapper">
          <div className="countdown__top">
            Event start in
          </div>
          <div className="countdown__bottom">
            <div className="countdown__item">
              <div className="countdown__time">
                {this.state.days}
              </div>
              <div className="countdown__tag">
                Days
              </div>
            </div>
            <div className="countdown__item">
              <div className="countdown__time">
              {this.state.hours}
              </div>
              <div className="countdown__tag">
                Hs
              </div>
            </div>
            <div className="countdown__item">
              <div className="countdown__time">
              {this.state.minutes}
              </div>
              <div className="countdown__tag">
                Mins
              </div>
            </div>
            <div className="countdown__item">
              <div className="countdown__time">
              {this.state.seconds}
              </div>
              <div className="countdown__tag">
                Secs
              </div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default Countdown;