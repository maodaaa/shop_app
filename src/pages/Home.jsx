import Slider from '../components/Slider';
import React from 'react';
import Annoucement from '../components/Annoucement';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="container">
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
