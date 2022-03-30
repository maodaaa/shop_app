import Slider from '../components/Slider';
import React from 'react';
import Annoucement from '../components/Annoucement';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="container">
      <Annoucement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
