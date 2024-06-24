import React from 'react';
import styles from './LargeScreenComponent.module.css';
import Navbar from './Navbar';
import HomeScreen from './HomeScreen';
import Feature1 from './Feature1';
import Testinomials from './Testinomials';
import Testimonials2 from './Testimonials2';
import End from './End';
import Footer from './Footer';
const LargeScreenComponent = () => {
  return (
    <div className={styles.container}>
    < Navbar/>
     <HomeScreen/>
     <Feature1/>
     <Testinomials/>
     <Testimonials2/>
     <End/>
     <Footer/>
    </div>
  );
};

export default LargeScreenComponent;
