import React from 'react';
import Slider from 'react-slick';

import slideOne from '../../resources/images/slide_one.jpg';
import slideTwo from '../../resources/images/slide_two.jpg';
import slideThree from '../../resources/images/slide_three.jpg';

const Carrousel = () => {
 
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,   
  };

  return (
    <div 
      className="carrousel__wrapper"
      style={{
        height:`${window.innerHeight}px`,
        overflow:'hidden'
      }}
    >
      <Slider  {...settings}>
        <div>
          <div 
            className="carrousel__image"
            style={{
              background:`url(${slideOne})`,
              height:`${window.innerHeight}px`
            }}
          >           
          </div>
        </div>
        <div>
          <div 
            className="carrousel__image"
            style={{
              background:`url(${slideTwo})`,
              height:`${window.innerHeight}px`
            }}
          >
          </div>
        </div>
        <div>
        <div 
            className="carrousel__image"
            style={{
              background:`url(${slideThree})`,
              height:`${window.innerHeight}px`
            }}
          >
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;