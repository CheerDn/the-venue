import React from "react"

const Location = () => {
  return (
    <div className="location__wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14457.99223592417!2d121.5498508!3d25.0511028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x682251d5c6f37a58!2z5Y-w5YyX5bCP5beo6JuL!5e0!3m2!1szh-TW!2stw!4v1587210411363!5m2!1szh-TW!2stw" width="100%" height="520" frameBorder="0" allowFullScreen="" title="the venue location"></iframe>
      <div className="location__tag">
        <div>Location</div>
      </div>
    </div>
  )
}

export default Location
