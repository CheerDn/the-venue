import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured/';
import VenueInfo from './components/venue_info/VenueInfo';
import Highlights from './components/highlights/Highlights'
import Pricing from './components/pricing/Pricing'

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
      <Pricing />
    </div>
  );
}

export default App;
