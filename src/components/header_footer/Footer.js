import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="bck--orange footer">
      <Fade delay={500}>
        <div className="font-righteous footer__logo-venue">The Venue</div>
        <div className="footer__copyright">
            The venue 2020. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;