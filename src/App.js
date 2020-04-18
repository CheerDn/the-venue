import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured/';
import VenueInfo from './components/venue_info/VenueInfo';
import Highlights from './components/highlights/Highlights'

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
    </div>
  );
}

export default App;
