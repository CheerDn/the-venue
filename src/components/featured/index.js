import React from 'react';
import Carrousel from './Carrousel';
import Countdown from './Countdown';

const Featured = () => {
  return (
    <div style={{position:'relative'}}>
      
      <Carrousel />

      <div className="artist-name">
        <div className="artist-name__wrapper">
          Ariana Grande
        </div>
      </div>

      <Countdown 
        className="countdown"
      />

    </div>
  );
};

export default Featured;